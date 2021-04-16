import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import questionService from "../../services/question-service";
import {connect} from "react-redux";
import quizService from "../../services/quiz-service";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Quiz = ({
    questions,
    findQuestionsForQuiz,
    setQuestionAnswer,
    submitQuiz
}) => {

  const {courseId, quizId} = useParams();
  const [quizTitle, setQuizTitle] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

  useEffect(() => {
    quizService.findQuizById(quizId).then(actualQuiz => {
      setQuizTitle(actualQuiz.title)
    })
    findQuestionsForQuiz(quizId)
  }, [courseId, quizId])


  return (
      <div className={'container-fluid'}>
        <h1>
          {quizTitle}
        </h1>
        <div>
          {questions.map(question => (
            <li key={question.id} className={"list-group-item"}>
              {question.type === "MULTIPLE_CHOICE" && <MultipleChoiceQuestion theQuestion={question} setQuestionAnswer={setQuestionAnswer} correctAnswerCount={correctAnswerCount} setCorrectAnswerCount={setCorrectAnswerCount}/>}
              {question.type === "TRUE_FALSE" && <TrueFalseQuestion theQuestion={question} setQuestionAnswer={setQuestionAnswer} correctAnswerCount={correctAnswerCount} setCorrectAnswerCount={setCorrectAnswerCount}/>}
            </li>
          ))}
        </div>
        &nbsp;
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={() => {
            submitQuiz(quizId, questions)
            console.log(questions)
            setSubmitted(true)
          }}>Submit Quiz</button>
        </div>
        &nbsp;
        {submitted &&
            <div>
              &nbsp;Your score for this attempt: <span>{`${100 * correctAnswerCount / questions.length}`}</span>
            </div>
        }
      </div>
  )
}

const stpm = (state) => ({
  questions: state.questionReducer.questions,
  theQuestion: state.questionReducer.theQuestion,
  theScore: state.questionReducer.score
})

const dtpm = (dispatch) => ({
  submitQuiz: (quizId, questions) => {
    questionService.submitQuiz(quizId, questions).then(quizAttempt => dispatch({
      type: "SUBMIT_QUIZ",
      questions: quizAttempt.answers,
      theScore: quizAttempt.score
    }))
  },

  createQuestion: (quizId) => {
    questionService.createQuestion(quizId, {title: "New Quiz"})
    .then(actualQuestion => dispatch({
      type: "CREATE_QUESTION",
      question: actualQuestion
    }))
  },
  findQuestionsForQuiz: (quizId) => {
    questionService.findQuestionsForQuiz(quizId).then(questions => dispatch({
      type: "FIND_ALL_QUESTIONS_FOR_QUIZ",
      questions: questions
    }))
  },
  findAllQuestions: () => {
    questionService.findAllQuestions().then(questions => dispatch({
      type: "FIND_ALL_QUESTIONS",
      questions: questions
    }))
  },
  findQuestionById: (questionId) => {
    questionService.findQuestionById(questionId).then(question => dispatch({
      type: "FIND_QUESTION",
      theQuestion: question
    }))
  },
  setQuestionAnswer: (question, studentAnswer) => {
    questionService.updateQuestion(question._id, {"answer":studentAnswer}).then(newQuestion => dispatch({
      type: 'UPDATE_QUESTION',
      updatedQuestion: newQuestion
    }))
  },
  updateQuestion: (question) => {
    questionService.updateQuestion(question._id, question)
    .then(status => dispatch({
      type: "UPDATE_QUESTION",
      updatedQuestion: question
    }))
  },
  deleteQuestion: (item) => {
    questionService.deleteQuestion(item._id)
    .then(status => dispatch({
      type: "DELETE_QUESTION",
      questionToDelete: item
    }))
  },
  emptyQuestions: () => {
    dispatch({
      type: "EMPTY_QUESTIONS"
    })
  }
})

export default connect(stpm, dtpm)(Quiz)
