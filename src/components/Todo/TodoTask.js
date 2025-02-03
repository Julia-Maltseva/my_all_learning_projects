import React from "react";
import { useState } from "react";
import styles from "./Todo.module.css";
import { MdClose } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

function TodoTask({task, tasks, setTasks, handleChangeStatusItem, handleRemoveTaskItem}) {

  const [isEditing, setIsEditing] = useState(false)
  const [editingText, setEditingText] = useState(task.text)

  const handleEditTaskText = (id) => {
    setIsEditing(true)
  }

  const handleAcceptEditData = (id) => {
    const newEditTask = {id, text: editingText, status: task.status}
    setTasks(tasks.map((el) => id === el.id ? newEditTask : el))
    setIsEditing(false)
  }

  const handleCancelEditData = (id) => {
    setIsEditing(false)
    setEditingText(task.text)
  }

  return (
    <li className={styles.taskItem} key={task.id}>
      <label htmlFor={task.id} className={styles.customCheckbox}>
        <input
          type="checkbox"
          id={task.id}
          checked={task.status}
          className={styles.taskItemComplited}
          onChange={() => handleChangeStatusItem(task.id)}
        />
        <span className={styles.checkboxTaskItemComplited}></span>
        {isEditing ? <input className={styles.editingInput} onChange={(e) => setEditingText(e.target.value)} value={editingText} /> : <p className={styles.taskText}>{task.text}</p>}
      </label>
      <div className={styles.actionsButtonsBlock}>
        {isEditing ? <>
        <button
          className={styles.editTaskText}
          onClick={() => handleAcceptEditData(task.id)}
        >
          <CiCircleCheck />
        </button>
        <button
          className={styles.removeTaskItem}
          onClick={() => handleCancelEditData(task.id)}
        >
          <MdOutlineCancel />
        </button> </>
        :
        <>
        <button
          className={styles.editTaskText}
          onClick={() => handleEditTaskText(task.id)}
        >
          <GoPencil />
        </button>
        <button
          className={styles.removeTaskItem}
          onClick={() => handleRemoveTaskItem(task.id)}
        >
          <MdClose />
        </button> </>
}
      </div>
    </li>
  );
}

export default TodoTask;
