const initialState = {
  lessons: []
}

const lessonReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...prevState,
        modules: [
          ...prevState.lessons,
          action.lesson
        ]
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...prevState,
        lessons: action.lessons
      }
    case "FIND_LESSON":
      return {
        ...prevState,
        lesson: action.lesson
      }
    case "UPDATE_LESSON":
      return {
        ...prevState,
        lessons: prevState.lessons.map(lesson => {
          if (lesson._id === action.updatedLesson._id) {
            return action.updatedLesson
          } else {
            return lesson
          }
        })
      }
    case "DELETE_LESSON":
      return {
        ...prevState,
        lessons: prevState.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
      }
    default:
      return prevState
  }
}

export default lessonReducer