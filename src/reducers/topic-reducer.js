const initialState = {
  topics: []
}

const topicReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "CREATE_TOPIC":
      return {
        ...prevState,
        topics: [
          ...prevState.topics,
          action.topic
        ]
      }
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...prevState,
        topics: action.topics
      }
    case "FIND_TOPIC":
      return {
        ...prevState,
        topic: action.topic
      }
    case "UPDATE_TOPIC":
      return {
        ...prevState,
        topics: prevState.topics.map(topic => {
          if (topic._id === action.updatedTopic._id) {
            return action.updatedTopic
          } else {
            return topic
          }
        })
      }
    case "DELETE_TOPIC":
      return {
        ...prevState,
        topics: prevState.topics.filter(topic => topic._id !== action.topicToDelete._id)
      }
    default:
      return prevState
  }
}

export default topicReducer