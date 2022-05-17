import React from 'react';
import { Link } from 'react-router-dom';
import CausesList from './CausesList/CausesList';
import styles from './WhySquadhelpNaming.module.sass';
import pointer from '../../../img/pointer.png';

function WhySquadhelpNaming () {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.title}>Why Squadhelp Naming Services?</h2>
      <CausesList />
      <div className={styles.imgWrapper}>
        <img src={pointer} alt='Pointer' className={styles.imgPointer} />
      </div>

      <h3 className={styles.subTitle}>World's #1 Naming Website</h3>
      <p className={styles.textBody}>
        Recognized as one of the <Link to='#'>Most Innovative Companies</Link>{' '}
        by Inc Magazine
      </p>
      <a className={styles.linkBtn} href='#'>
        See How It Works
      </a>
      <span className={styles.textSpan}>Over 25,000+ Customers</span>
    </section>
  );
}

export default WhySquadhelpNaming;
