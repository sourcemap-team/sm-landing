import React from 'react';

import styles from './Services.module.scss';
import { Collapse } from '@/shared/ui';

export const Services = () => {
  return (
    <div className={styles.container}>
      <h2 className="title">Services</h2>
      <Collapse title="Web Apps" icon="/icons/services/planet.svg">
        <p>
          One of the priorities of our team. We develop services from simple web
          applications to highly loaded banking systems. We install a convenient
          admin panel for working with the content of your system (CMS).
        </p>
      </Collapse>
    </div>
  );
};
