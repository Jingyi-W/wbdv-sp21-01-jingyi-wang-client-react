import React, {useState} from 'react'

const TrueFalseQuestion = ({theQuestion, setQuestionAnswer, correctAnswerCount, setCorrectAnswerCount}) => {
  const [answered, setAnswered] = useState(false)
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false)
  const [studentAnswer, setStudentAnswer] = useState(null)

  return (
      <div>
        <div className={"row"}>
          <div className={"col"}>
            <h3>
              {theQuestion.question}
            </h3>
          </div>
          <div className={"col"}>
            {answered &&
            <>
              { answerIsCorrect && <span
                  className="badge badge-success"><i className="fas fa-check fa-2x"></i></span>}
              { !answerIsCorrect && <span
                  className="badge badge-danger"><i className="fas fa-times fa-2x"></i></span>}
            </>
            }
          </div>


        </div>
        <ul className="list-group">
          <li className={`list-group-item 
                ${answered && "true" === theQuestion.correct ? 'list-group-item-success' : ''} 
                ${answered && "true" !== theQuestion.correct && "true" === studentAnswer ? 'list-group-item-danger' : ''}`}>
            <label>
              <input type="radio" name={theQuestion._id} onClick={() => {
                setStudentAnswer("true")
                setAnswerIsCorrect("true" === theQuestion.correct)
              }}/>
              TRUE
            </label>
            {answered && "true" === theQuestion.correct && <i className="float-right fas fa-check fa-2x"></i>}
            {answered && "true" !== theQuestion.correct && "true" === studentAnswer && <i className="float-right fas fa-times fa-2x"></i> }
          </li>
          <li className={`list-group-item 
                ${answered && "false" === theQuestion.correct ? 'list-group-item-success' : ''} 
                ${answered && "false" !== theQuestion.correct && "false" === studentAnswer ? 'list-group-item-danger' : ''}`}>
            <label>
              <input type="radio" name={theQuestion._id} onClick={() => {
                setStudentAnswer("false")
                setAnswerIsCorrect("false" === theQuestion.correct)
              }}/>
              FALSE
            </label>
            {answered && "false" === theQuestion.correct && <i className="float-right fas fa-check fa-2x"></i>}
            {answered && "false" !== theQuestion.correct && "false" === studentAnswer && <i className="float-right fas fa-times fa-2x"></i> }
          </li>

        </ul>
        <div className={"row"}>
          &nbsp;
        </div>
        <div className={"row"}>
          Your answer: <span>{studentAnswer}</span>
        </div>
        <div className={"row"}>
          &nbsp;
        </div>
        <div className={"row"}>
          <button className={"btn btn-success"} onClick={() => {
            setAnswered(true)
            setQuestionAnswer(theQuestion, studentAnswer)
            setCorrectAnswerCount(studentAnswer == theQuestion.correct ? correctAnswerCount + 1 : correctAnswerCount)
          }}>Grade</button>
        </div>
      </div>
  )

}

export default TrueFalseQuestion