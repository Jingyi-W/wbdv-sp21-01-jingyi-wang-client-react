import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import questionService from "../../services/question-service";
import {connect} from "react-redux";
import quizService from "../../services/quiz-service";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Quiz = ({
    questions,
    findQuestionsForQuiz
}) => {

  const {courseId, quizId} = useParams();
  const [quizTitle, setQuizTitle] = useState("")
  useEffect(() => {
    quizService.findQuizById(quizId).then(actualQuiz => {
      setQuizTitle(actualQuiz.title)
    })
    findQuestionsForQuiz(quizId)
  }, [courseId, quizId])


  return (
      <div>
        <h1>
          {quizTitle}
        </h1>
        <div>
          {questions.map(question => (
            <li key={question.id} className={"list-group-item"}>
              {question.type === "MULTIPLE_CHOICE" && <MultipleChoiceQuestion theQuestion={question}/>}
              {question.type === "TRUE_FALSE" && <TrueFalseQuestion theQuestion={question}/>}
            </li>
          ))}
        </div>
      </div>
  )
}

const stpm = (state) => ({
  questions: state.questionReducer.questions,
  theQuestion: state.questionReducer.theQuestion
})

const dtpm = (dispatch) => ({
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
