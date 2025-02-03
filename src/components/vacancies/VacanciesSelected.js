import React from 'react'
import styles from "./Vacancies.module.css";


const VacanciesSelected = ({selectedTags, setSelectedTags}) => {

   const handleClickRemoveTag = (tag) => {
     setSelectedTags(prevState => prevState.filter((el) => el !== tag))
   }
    
  return (
    <div className={styles.vacanciesSelected}>
      {selectedTags.map((el) => (
        <div>
          <span className={styles.selectedTag}>{el}</span>
          <button className={styles.btnSelectedTag} onClick={() => handleClickRemoveTag(el)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default VacanciesSelected
