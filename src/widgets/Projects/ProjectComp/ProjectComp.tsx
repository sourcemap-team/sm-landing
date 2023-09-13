import React from 'react';
import { Navigation, Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ProjectComp.module.css';
import { PROJECTS } from '../data';
import { Tag } from '@/shared/ui';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { IProjectCompProps } from './types';

SwiperCore.use([Pagination, Autoplay, Mousewheel, Navigation]);

const ProjectComp = ({ project }: IProjectCompProps) => {
  console.log(project);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topBlock}>
        <div className={styles.headerDiv}>
          <div className={styles.imageContainer}>
            <Image
              src="/logos/flowmapp.png"
              alt="flowmapp"
              className={styles.img}
              width={69}
              height={69}
            />
          </div>
          <h3 className={styles.titleHeader}>{project?.title}</h3>
        </div>
        <div className={styles.sliderContainer}>
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
            <SwiperSlide>
              <div className={styles.swiperBlock}>
                <Image
                  src="/images/projects/connect.png"
                  alt="flowmapp"
                  className={styles.img}
                  width={897}
                  height={550}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperBlock}>
                <Image
                  src="/images/projects/flowmapp.png"
                  alt="flowmapp"
                  className={styles.img}
                  width={897}
                  height={550}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperBlock}>
                <Image
                  src="/images/projects/feexle.png"
                  alt="flowmapp"
                  className={styles.img}
                  width={897}
                  height={550}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.tagsContainer}>
          <ul className={styles.tags}>
            {project?.tags?.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
          <h1>{project?.comp}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
