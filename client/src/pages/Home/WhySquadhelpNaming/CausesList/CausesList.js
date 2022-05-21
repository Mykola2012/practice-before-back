import React from 'react';
import { Link } from 'react-router-dom';
import articles from './articles.json';
import styles from './CausesList.module.sass';

function CausesList () {
  const mapArticles = (a, i) => {
    const {
      title,
      bodyPart1,
      bodyPart2,
      linkFirstItem,
      linkSecondItem,
      iconClass,
      color,
      colorBg,
    } = a;

    const stylesIcon = {
      color: color,
    };

    const bgIcon = {
      backgroundColor: colorBg,
    };

    return (
      <li key={i} className={styles.listItemContainer}>
        <div style={bgIcon} className={styles.iconContainter}>
          <i className={iconClass} style={stylesIcon}></i>
        </div>
        <h3 className={styles.subTitle}>{title}</h3>
        <p className={styles.paragraphBody}>
          <span className={styles.textBody}>{bodyPart1}</span>
          <Link to='#'>{linkFirstItem}</Link>
          <Link to='#'>{linkSecondItem}</Link>
          <span className={styles.textBody}>{bodyPart2}</span>
        </p>
      </li>
    );
  };

  return (
    <ul className={styles.articleContainer}>{articles.map(mapArticles)}</ul>
  );
}

export default CausesList;
