import React, { useState } from "react";
import styles from "./Vacancies.module.css";
import VacanciesList from "./VacanciesList";
import VacanciesSelected from "./VacanciesSelected";

function Vacancies() {
  
  const [selectedTags, setSelectedTags] = useState([]);
  console.log(selectedTags)

  return (
    <div>
      <header className={styles.header}></header>
      <VacanciesSelected selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <VacanciesList selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
    </div>
  );
}

export default Vacancies;
