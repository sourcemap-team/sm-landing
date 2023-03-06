import styles from './Activity.module.scss';

import React from 'react';

export const Activity = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        We actively participate in hackathons, speak at various platforms,
        record courses and share with the community our experience.
      </p>
      <div className={styles.activities}>
        <div className={styles.activity}></div>
      </div>
    </div>
  );
};
