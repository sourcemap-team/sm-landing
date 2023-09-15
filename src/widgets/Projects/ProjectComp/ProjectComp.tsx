import React from 'react';
import { Navigation, Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ProjectComp.module.css';
import { Tag } from '@/shared/ui';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { IProjectCompProps } from './types';
import { useLocale } from '@/shared/hooks';

const textProjectGoal = new Map([
  ['en', 'Project goal'],
  ['ru', 'Цель проекта'],
]);

const textSolution = new Map([
  ['en', 'Solution'],
  ['ru', 'Решение'],
]);

SwiperCore.use([Pagination, Autoplay, Mousewheel, Navigation]);

const ProjectComp = ({ project }: IProjectCompProps) => {
  const locale = useLocale();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topBlock}>
        <div className={styles.headerDiv}>
          <div className={styles.imageContainer}>
            <Image
              src={project?.images.logo}
              alt={project?.title}
              className={styles.img}
              width={69}
              height={69}
            />
          </div>
          <h3 className={styles.titleHeader}>{project?.title}</h3>
        </div>
        <div className={styles.sliderContainer}>
          {project?.images?.sliderContent?.length > 1 ? (
            <Swiper
              loop={false}
              modules={[Navigation, Autoplay, Pagination, Mousewheel]}
              slidesPerView={1.37}
              spaceBetween={10}
              speed={2000}
              navigation
              mousewheel={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
            >
              {project?.images?.sliderContent?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.swiperBlock}>
                    <Image
                      src={image}
                      alt={project?.title}
                      className={styles.swiperSlide}
                      style={{
                        borderRadius: '30px',
                        border: '0.5px solid grey',
                      }}
                      width={897}
                      height={550}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={styles.goalImageBlock}>
              <Image
                src={project?.images?.sliderContent[0]}
                alt={project?.title}
                style={{
                  borderRadius: '30px',
                  border: '0.5px solid grey',
                  marginRight: '50px',
                }}
                width={project?.title === 'Connect' ? 900 : 1200}
                height={550}
              />
            </div>
          )}
        </div>
        <div className={styles.tagsContainer}>
          <ul className={styles.tags}>
            {project?.tags?.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.goalBlock}>
        <div className={styles.goalHeaderBlock}>
          <h1 className={styles.goalHeader}>{textProjectGoal.get(locale)}</h1>
        </div>
        <div className={styles.goalContentBlock}>
          <p>{project?.projectGoal[locale]}</p>
        </div>
        <div
          className={
            project?.title === 'Connect'
              ? styles.goalImageConnectBlock
              : styles.goalImageBlock
          }
        >
          <Image
            src={project?.images?.goalImage}
            className={
              project?.title === 'Connect'
                ? styles.goalImageConnect
                : styles.goalImage
            }
            alt={project?.title}
            width={project?.title === 'Connect' ? 300 : 1200}
            height={735}
          />
        </div>
      </div>
      <div className={styles.solutionBlock}>
        <div className={styles.solutionHeaderBlock}>
          <h1 className={styles.solutionHeader}>{textSolution.get(locale)}</h1>
        </div>
        <div className={styles.solutionContentBlock}>
          <p>{project?.solution[locale]}</p>
        </div>
        <div
          className={
            project?.title === 'Connect'
              ? styles.solutionImageConnectBlock
              : styles.solutionImageBlock
          }
        >
          <Image
            src={project?.images.solutionImage}
            width={project?.title === 'Connect' ? 300 : 1200}
            className={
              project?.title === 'Connect'
                ? styles.solutionImageConnect
                : styles.solutionImage
            }
            alt={project?.title}
            height={735}
          />
        </div>
      </div>
      <div className={styles.propsCompContainer}>{project?.comp}</div>
    </div>
  );
};
export default ProjectComp;
