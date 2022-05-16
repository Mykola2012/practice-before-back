import React from 'react';
import { Link } from 'react-router-dom';
import CausesList from './CausesList/CausesList';
import styles from './WhySquadhelpNaming.module.sass';

function WhySquadhelpNaming () {
  return (
    <>
      <h2>Why Squadhelp Naming Services?</h2>
      <CausesList />
      <div>
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
      </div>
      <h3>World's #1 Naming Website</h3>
      <p>
        Recognized as one of the <Link to='#'>Most Innovative Companies</Link>{' '}
        by Inc Magazine
      </p>
      <Link to='#'>See How It Works</Link>
      <span>Over 25,000+ Customers</span>
    </>
  );
}

export default WhySquadhelpNaming;
