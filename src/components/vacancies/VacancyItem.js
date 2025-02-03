import React from 'react'
import styles from "./Vacancies.module.css";
import VacancyTag from './VacancyTag';

function VacancyItem({company, img, isNew, featured, position, postedAt, contract, location, role, level, languages, tools, setSelectedTags}) {
    const tags = [role, level, ...languages, ...tools]
  return (
    <li className={styles.vacancy}>
    <img
      className={styles.companyLogo}
      src={img}
      alt="logo"
    />
    <div className={styles.vacancyInfo}>
      <div className={styles.vacancyName}>
        <h3 className={styles.companyName}>{company}</h3>
        {isNew && <button className={styles.buttonNew}>NEW!</button>}
        {featured && <button className={styles.buttonFeatured}>FEATURED</button>}
      </div>
      <p className={styles.jobName}>{position}</p>
      <ul className={styles.listCriteria}>
        <li className={styles.criteria}>{postedAt}</li>
        <li className={styles.criteria}>{contract}</li>
        <li className={styles.criteria}>{location}</li>
      </ul>
    </div>
    <ul className={styles.vacancyTags}>

      {tags.map((item) => (
        <VacancyTag item={item} setSelectedTags={setSelectedTags} />
      ))}
      
    </ul>
  </li>
  )
}

export default VacancyItem;
