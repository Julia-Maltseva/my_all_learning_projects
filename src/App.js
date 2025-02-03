//import { useState } from "react"
//import Tabs from "./components/Tabs/Tabs";
//import Questions from "./components/Questions/Questions";
//import Vacancies from "./components/vacancies/Vacancies";
import Todo from "./components/Todo/Todo";
import "./index.css"

function App() {
 /* const [text, setText] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState()
  const [savedValues, setSavedValues] = useState({
    text: text,
    size: size,
    color: color,
  })
  
  const handleChangeInputValue = (ev) => {
    setText(ev.target.value)
  }

  const handleChangeInputSize = (ev) => {
    setSize(ev.target.value)
  }

  const handleChangeSelectColor = (ev) => {
    setColor(ev.target.value)
  }

  const handleClickSaveValue = () => {
    setSavedValues({
      text: text,
      size: size,
      color: color,
    })
  }

  return (
    <div className="App" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", gap: "10px"}}>
     <div><input placeholder="Text" onChange={handleChangeInputValue} /> <input placeholder="Size" onChange={handleChangeInputSize} type="number" style={{width: "50px"}} /> <select onChange={handleChangeSelectColor}><option>black</option><option>red</option><option>green</option></select> <button onClick={handleClickSaveValue}>Save</button></div>
     <h1 style={{fontSize: savedValues.size+"px", color: savedValues.color}}>{savedValues.text}</h1>
    </div>
  );*/

  return (<><Todo /></>) 
}

export default App;
