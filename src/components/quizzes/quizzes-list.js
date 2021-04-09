import React, {useEffect} from 'react'
import quizService from "../../services/quiz-service";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";


const QuizzesList = ({
    quizzes,
    theQuiz,
    findQuizzesForCourse,
    findAllQuizzes,
    findQuizByid,
    emptyQuizzes
}) => {
  const {courseId} = useParams();

  useEffect(() => {
    // if (courseId !=="undefined" && typeof courseId !== "undefined") {
    //   findQuizzesForCourse(courseId)
    // } else {
    //   emptyQuizzes()
    // }
    findAllQuizzes()
  }, [courseId])

  return(
      <div className={"contianer-fluid"}>
        <h1>
          Quizzes
        </h1>
        <table className={"table"}>
          <tbody>
          {quizzes.map(quiz => (
              <tr className={"d-flex"}>
                <td className={"col text-left"}>
                  {quiz.title}
                </td>
                <td className={"col text-center"}>
                  <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                    <button className="btn btn-primary">
                      Start
                    </button>
                  </Link>
                </td>
              </tr>
          ))}

          </tbody>
        </table>
      </div>
  )
}

const stpm = (state) => ({
  quizzes: state.quizReducer.quizzes,
  theQuiz: state.quizReducer.theQuiz
})

const dtpm = (dispatch) => ({
  createQuiz: (courseId) => {
    quizService.createQuiz(courseId, {title: "New Quiz"})
    .then(actualQuiz => dispatch({
      type: "CREATE_QUIZ",
      quiz: actualQuiz
    }))
  },
  findQuizzesForCourse: (courseId) => {
    quizService.findQuizzesForCourse(courseId).then(quizzes => dispatch({
      type: "FIND_ALL_QUIZZES_FOR_COURSE",
      quizzes: quizzes
    }))
  },
  findAllQuizzes: () => {
    quizService.findAllQuizzes().then(quizzes => dispatch({
      type: "FIND_ALL_QUIZZES",
      quizzes: quizzes
    }))
  },
  findQuizById: (quizId) => {
    quizService.findQuizById(quizId).then(quiz => dispatch({
      type: "FIND_QUIZ",
      theQuiz: quiz
    }))
  },
  updateQuiz: (quiz) => {
    quizService.updateQuiz(quiz._id, quiz)
    .then(status => dispatch({
      type: "UPDATE_QUIZ",
      updatedQuiz: quiz
    }))
  },
  deleteQuiz: (item) => {
    quizService.deleteQuiz(item._id)
    .then(status => dispatch({
      type: "DELETE_QUIZ",
      quizToDelete: item
    }))
  },
  emptyQuizzes: () => {
    dispatch({
      type: "EMPTY_QUIZZES"
    })
  }
})

export default connect(stpm, dtpm)(QuizzesList)