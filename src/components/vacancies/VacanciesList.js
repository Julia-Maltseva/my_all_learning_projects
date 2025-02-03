import React from 'react'
import styles from "./Vacancies.module.css";
import { arr } from "../../data/Data.js";
import VacancyItem from './VacancyItem.js';

const VacanciesList = ({selectedTags, setSelectedTags}) => {
  
  const filteredList = arr.filter((el) => {
    const tags = [el.role, el.level, ...el.languages, ...el.tools]
    return selectedTags.every((elem) => tags.includes(elem))
  })

  return (
    <ul className={styles.vacancyList}>
        {filteredList.map((vacancy) => (

         <VacancyItem company={vacancy.company} img={vacancy.img} isNew={vacancy.new} featured={vacancy.featured} position={vacancy.position} postedAt={vacancy.postedAt} contract={vacancy.contract} location={vacancy.location} role={vacancy.role} level={vacancy.level} languages={vacancy.languages} tools={vacancy.tools} setSelectedTags={setSelectedTags} />
        ))}
        
      </ul>
  )
}

export default VacanciesList
