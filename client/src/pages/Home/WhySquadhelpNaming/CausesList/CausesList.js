import React from 'react';
import { Link } from 'react-router-dom';
import articles from './articles.json';
import styles from './CausesList.module.sass';

function CausesList () {
  const mapBodyPart2 = a => <p className={styles.textBody}>{a.bodyPart2}</p>;

  const mapArticles = (a, i) => {
    const { title, bodyPart1, linkText, iconClass, color, colorBg } = a;

    const stylesIcon = {
      color: color,
      backgroundColor: colorBg,
    };

    return (
      <li key={i} className={styles.listItemContainer}>
        <h3 className={styles.subTitle}>{title}</h3>
        <i className={iconClass} style={stylesIcon}></i>
        <div className={styles.bodyWrapper}>
          <p className={styles.textBody}>{bodyPart1}</p>
          <Link to='#'>{linkText}</Link>
          {articles.map(mapBodyPart2)}
        </div>
      </li>
    );
  };

  return (
    <ul className={styles.articleContainer}>{articles.map(mapArticles)}</ul>
  );
}

export default CausesList;
