import React from "react";
import styles from "./Vacancies.module.css";

const VacancyTag = ({item, setSelectedTags}) => {

  const handleAddTagsToFilter = () => {
    setSelectedTags(prevState => [...new Set([item, ...prevState])])
  }

  return (
    <li className={styles.vacancyItem}>
      <button className={styles.buttonTag} onClick={handleAddTagsToFilter}>{item}</button>
    </li>
  );
};

export default VacancyTag;
