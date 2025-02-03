import React, { useEffect, useState } from "react";
import styles from "./Todo.module.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import TodoTask from "./TodoTask.js";

function Todo() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    const addNewTask = (e) => {
      if (e.key === "Enter" && taskText.trim().length > 0) {
        const newTask = { id: uuidv4(), text: taskText, status: false };
        setTasks((prevState) => [newTask, ...prevState]);
        setTaskText("");
      }
    };
    document.addEventListener("keydown", addNewTask);

    return () => {
      document.removeEventListener("keydown", addNewTask);
    };
  }, [taskText]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleRemoveTaskItem = (id) => {
    setTasks(tasks.filter((el) => el.id !== id));
  };

  const handleChangeStatusItem = (id) => {
    setTasks(
      tasks.map((el) => {
        if (el.id === id) {
          return { ...el, status: !el.status };
        } else {
          return el;
        }
      })
    );
  };

  const handleChangeThemePage = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };
  console.log(tasks);
  return (
    <div
      className={`${styles.page} ${
        theme === "dark" ? styles.darkMode : styles.lightMode
      }`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.infoPage}>
            <h1 className={styles.namePage}>TODO</h1>
            <button
              className={styles.changeThemePage}
              onClick={() => handleChangeThemePage()}
            >
              {theme === "dark" ? (
                <FiSun style={{ fontSize: "30px", color: "white" }} />
              ) : (
                <FiMoon style={{ fontSize: "30px", color: "white" }} />
              )}
            </button>
          </div>
        </header>
        <div className={styles.tasks}>
          <input
            className={styles.addNewTask}
            placeholder={"Create a new todo..."}
            onChange={(e) => setTaskText(e.target.value)}
            value={taskText}
          />
          <ul className={styles.tasksList}>
            {tasks.map((task) => (
              <TodoTask key={task.id} tasks={tasks} setTasks={setTasks} task={task} handleChangeStatusItem={handleChangeStatusItem}  handleRemoveTaskItem={handleRemoveTaskItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
