import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProjectTopBlock.module.scss';
import { ProjectPropsType } from '../types';
import { Tag } from '@/shared/ui';

import { Navigation, Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';

SwiperCore.use([Pagination, Autoplay, Mousewheel, Navigation]);

const ProjectTopBlock = ({ project }: ProjectPropsType) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const MOBILE_SLIDES_VIEW = 1;
  const TABLET_SLIDES_VIEW = 1.37;
  const MOBILE_WIDTH = 480;
  const SLIDE_WIDTH = 897;
  const SLIDE_HEIGHT = 550;
  const LOGO_SIZE = 69;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src={project.images.logo}
              alt={project.title}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
            />
          </div>

          <h3 className={styles.title}>{project.title}</h3>
        </div>

        <div className={styles.slider}>
          <Swiper
            loop={false}
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
                <Image
                  src={image}
                  alt={project.title}
                  className={styles.slide}
                  width={SLIDE_WIDTH}
                  height={SLIDE_HEIGHT}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.tagsContainer}>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag className={styles.tag}>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectTopBlock;
