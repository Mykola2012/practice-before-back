import React from 'react';
import { Link } from 'react-router-dom';
import articles from './articles.json';
import styles from './CausesList.module.sass';

function CausesList () {
  const mapBodyPart2 = a => <p>{a.bodyPart2}</p>;

  const mapArticles = (a, i) => (
    <li key={i}>
      <h3>{a.title}</h3>
      <i className={a.iconClass}></i>
      <p>{a.bodyPart1}</p>
      <Link to='#'>{a.linkText}</Link>
      {articles.map(mapBodyPart2)}
    </li>
  );

  return <ul>{articles.map(mapArticles)}</ul>;
}

export default CausesList;
