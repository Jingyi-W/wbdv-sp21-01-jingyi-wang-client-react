import React, {useState} from 'react'

const MultipleChoiceQuestion = ({theQuestion}) => {
  const [answered, setAnswered] = useState(false)
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false)
  const [studentAnswer, setStudentAnswer] = useState("")

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
          {theQuestion.choices.map(choice => {
            return (
                <li className={`list-group-item 
                ${answered && choice === theQuestion.correct ? 'list-group-item-success' : ''} 
                ${answered && choice !== theQuestion.correct && choice === studentAnswer ? 'list-group-item-danger' : ''}`}>
                  <label>
                    <input type="radio" name={theQuestion._id} onClick={() => {
                      setStudentAnswer(choice)
                      setAnswerIsCorrect(choice === theQuestion.correct)
                    }}/>
                    {choice}
                  </label>
                  {answered && choice === theQuestion.correct && <i className="float-right fas fa-check fa-2x"></i>}
                  {answered && choice !== theQuestion.correct && choice === studentAnswer && <i className="float-right fas fa-times fa-2x"></i> }
                </li>
            )
          })}


          {/*{!answered &&*/}
          {/*  theQuestion.choices.map(choice => (*/}
          {/*        // <div className={"row"}>*/}
          {/*        //   <div className="form-check ">*/}
          {/*        //     <input className="form-check-input" type="radio" value={choice}/>*/}
          {/*        //     <label className="form-check-label" >*/}
          {/*        //       {choice}*/}
          {/*        //     </label>*/}
          {/*        //   </div>*/}
          {/*        // </div>*/}
          {/*        <li className="list-group-item">*/}
          {/*          <label>*/}
          {/*            <input type="radio" name={theQuestion._id} onClick={() => {*/}
          {/*              setStudentAnswer(choice)*/}
          {/*              setAnswerIsCorrect(choice === theQuestion.correct)*/}
          {/*            }}/>*/}
          {/*            {choice}*/}
          {/*          </label>*/}
          {/*        </li>*/}
          {/*    ))*/}
          {/*}*/}
          {/*{ answered &&*/}
          {/*  theQuestion.choices.map(choice => {*/}
          {/*    if (choice == theQuestion.correct) {*/}
          {/*      return (<li className="list-group-item list-group-item-success">*/}
          {/*        <label>*/}
          {/*          <input type="radio" name={theQuestion._id} onClick={() => {*/}
          {/*            setStudentAnswer(choice)*/}
          {/*            setAnswerIsCorrect(choice === theQuestion.correct)*/}
          {/*          }}/>*/}
          {/*          {choice}*/}
          {/*        </label>*/}
          {/*        <i className="float-right fas fa-check fa-2x"></i>*/}
          {/*      </li>)*/}
          {/*    } else {*/}
          {/*      if (choice === studentAnswer) {*/}
          {/*        return (<li className="list-group-item list-group-item-danger">*/}
          {/*          <label>*/}
          {/*            <input type="radio" name={theQuestion._id} onClick={() => {*/}
          {/*              setStudentAnswer(choice)*/}
          {/*              setAnswerIsCorrect(choice === theQuestion.correct)*/}
          {/*            }}/>*/}
          {/*            {choice}*/}
          {/*          </label>*/}
          {/*          <i className="float-right fas fa-times fa-2x"></i>*/}
          {/*        </li>)*/}
          {/*      } else {*/}
          {/*        return (<li className="list-group-item">*/}
          {/*          <label>*/}
          {/*            <input type="radio" name={theQuestion._id} onClick={() => {*/}
          {/*              setStudentAnswer(choice)*/}
          {/*              setAnswerIsCorrect(choice === theQuestion.correct)*/}
          {/*            }}/>*/}
          {/*            {choice}*/}
          {/*          </label>*/}
          {/*        </li>)*/}
          {/*      }*/}
          {/*    }*/}
          {/*  })*/}
          {/*}*/}

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
          <button className={"btn btn-success"} onClick={() => setAnswered(true)}>Grade</button>
        </div>
      </div>

  )
}

export default MultipleChoiceQuestion