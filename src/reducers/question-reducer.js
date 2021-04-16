const initialState = {
  questions: [],
  theQuestion: null,
  score: null,
}

const questionReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_QUIZ":
      return {
        ...prevState,
        questions: action.questions,
        score: action.score
      }

    case "CREATE_QUESTION":
      return {
        ...prevState,
        questions: [
          ...prevState.questions,
          action.question
        ]
      }
    case "FIND_ALL_QUESTIONS_FOR_QUIZ":
      return {
        ...prevState,
        questions: action.questions
      }
    case "FIND_ALL_QUESTIONS":
      return {
        ...prevState,
        questions: action.questions
      }
    case "FIND_QUESTION":
      return {
        ...prevState,
        theQuestion: action.theQuestion
      }
    case "UPDATE_QUESTION":
      return {
        ...prevState,
        questions: prevState.questions.map(question => {
          if (question._id === action.updatedQuestion._id) {
            return action.updatedQUestion
          } else {
            return question
          }
        })
      }
    case "DELETE_QUESTION":
      return {
        ...prevState,
        questions: prevState.questions.filter(question => question._id !== action.questionToDelete._id)
      }
    case "EMPTY_QUESTIONS":
      return {
        ...prevState,
        questions: []
      }
    default:
      return prevState
  }
}

export default questionReducer