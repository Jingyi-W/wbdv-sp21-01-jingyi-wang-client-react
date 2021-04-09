const initialState = {
  quizzes:[],
  theQuiz: {}
}

const quizReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "CREATE_QUIZ":
      return {
        ...prevState,
        quizzes: [
          ...prevState.quizzes,
          action.quiz
        ]
      }
    case "FIND_ALL_QUIZZES":
      return {
        ...prevState,
        quizzes: action.quizzes
      }
    case "FIND_QUIZ":
      return {
        ...prevState,
        theQuiz: action.theQuiz
      }
    case "UPDATE_QUIZ":
      return {
        ...prevState,
        quizzes: prevState.quizzes.map(quiz => {
          if (quiz._id === action.updatedQuiz._id) {
            return action.updatedQuiz
          } else {
            return quiz
          }
        })
      }
    case "DELETE_QUIZ":
      return {
        ...prevState,
        quizzes: prevState.quizzes.filter(quiz => quiz._id !== action.quizToDelete._id)
      }
    case "EMPTY_QUIZZES":
      return {
        ...prevState,
        quizzes: []
      }
    default:
      return prevState
  }
}

export default quizReducer