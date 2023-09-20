import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectContainer.module.scss';

import { useLocale } from '@/shared/hooks';
import { Tag } from '@/shared/ui';
import { ProjectPropsType } from './types';

import { Navigation, Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';

const textProjectGoal = new Map([
  ['en', 'Project goal'],
  ['ru', 'Цель проекта'],
]);

const textSolution = new Map([
  ['en', 'Solution'],
  ['ru', 'Решение'],
]);

SwiperCore.use([Pagination, Autoplay, Mousewheel, Navigation]);

const ProjectContainer = ({ project }: ProjectPropsType) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const MOBILE_SLIDES_VIEW = 1;
  const TABLET_SLIDES_VIEW = 1.37;
  const MOBILE_WIDTH = 480;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const locale = useLocale();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topBlock}>
        <div className={styles.headerDiv}>
          <div className={styles.imageContainer}>
            <Image
              src={project.images.logo}
              alt={project.title}
              className={styles.img}
              width={69}
              height={69}
            />
          </div>
          <h3
            className={
              project.title === 'Invest Allocator'
                ? styles.titleHeaderIA
                : styles.titleHeader
            }
          >
            {project.title}
          </h3>
        </div>
        <div className={styles.sliderContainer}>
          {project.images.sliderContent.length > 1 ? (
            <Swiper
              loop={false}
              className={styles.swiper}
              modules={[Navigation, Autoplay, Pagination, Mousewheel]}
              slidesPerView={
                windowWidth < MOBILE_WIDTH
                  ? MOBILE_SLIDES_VIEW
                  : TABLET_SLIDES_VIEW
              }
              spaceBetween={10}
              speed={2000}
              navigation
              mousewheel={false}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
            >
              {project.images.sliderContent.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.swiperBlock}>
                    <Image
                      style={
                        project.title === 'Connect' ? { border: 'none' } : {}
                      }
                      src={image}
                      alt={project.title}
                      className={styles.swiperSlide}
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
                src={project.images.sliderContent[0]}
                alt={project.title}
                width={1200}
                height={project.title === 'Connect' ? 735 : 550}
              />
            </div>
          )}
        </div>
        <div className={styles.tagsContainer}>
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag className={styles.tag}>{tag}</Tag>
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
          <p className={styles.goalContent}>{project?.projectGoal[locale]}</p>
        </div>
        <div className={styles.goalImageBlock}>
          <Image
            style={project.title === 'Connect' ? { border: 'none' } : {}}
            src={project.images.goalImage}
            className={styles.goalImage}
            alt={project.title}
            width={1200}
            height={735}
          />
        </div>
      </div>
      <div className={styles.solutionBlock}>
        <div className={styles.solutionHeaderBlock}>
          <h1 className={styles.solutionHeader}>{textSolution.get(locale)}</h1>
        </div>
        <div className={styles.solutionContentBlock}>
          <p className={styles.goalContent}>{project.solution[locale]}</p>
        </div>
        <div className={styles.solutionImageBlock}>
          <Image
            style={project.title === 'Connect' ? { border: 'none' } : {}}
            src={project.images.solutionImage}
            width={1200}
            className={styles.solutionImage}
            alt={project.title}
            height={735}
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectContainer;
