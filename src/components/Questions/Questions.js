import { useState } from "react"
import "./Questions.css"

const list = [
    {
        question: "Who built this Javascriptless accordion demo?",
        answer: "Для современного мира высококачественный прототип будущего проекта требует анализа экономической целесообразности принимаемых решений. Имеется спорная точка зрения, гласящая примерно следующее: явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть объявлены нарушающими общечеловеческие нормы этики и морали."
    },
    {
        question: "Why not just use Javasript?",
        answer: "Прежде всего, сплочённость команды профессионалов представляет собой интересный эксперимент проверки первоочередных требований. Современные технологии достигли такого уровня, что высококачественный прототип будущего проекта влечет за собой процесс внедрения и модернизации системы массового участия."
    },
    {
        question: "Can I just copy and paste this code for my own project?",
        answer: "Прежде всего, консультация с широким активом способствует подготовке и реализации приоретизации разума над эмоциями. Господа, укрепление и развитие внутренней структуры предоставляет широкие возможности для укрепления моральных ценностей."
    }
]

function Questions() {

    const [question, setQuestion] = useState({
        0: false,
        1: false,
        2: false,
    })
    const handleClickQuestion = (index) => {
    /*    if (question.includes(index)) {
            setQuestion(question.filter((el) => el !== index))
        } else {
            setQuestion([...question,index])
        }*/
       setQuestion({...question,[index]:!question[index]})
    }

    return (
        <div className="questions">
          <h1 className="title">Frequently Asked Questions</h1>
          <ul className="list">
            {list.map((el,index) => (
                <li>
                  <div className="list__question" onClick={() => handleClickQuestion(index)}>
                    <h3>{el.question}</h3>
                    <button className="buttonClick"><img className={question[index] && 'opened_answer'} width={25} src="./images/down.png" /></button>
                  </div>
                    {question[index] && <p>{el.answer}</p>}
                 
                </li>
            ))}
          </ul>
        </div>
    )
}

export default Questions;