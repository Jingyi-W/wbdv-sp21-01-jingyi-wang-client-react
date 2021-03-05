import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import topicService from "../../services/topic-service";

const TopicPills = ({
    topics=[],
    findTopicsForLesson=()=>[],
    createTopic,
    updateTopic,
    deleteTopic,
    emptyTopic
}) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  useEffect(()=>{
    console.log(lessonId)
    if (moduleId !=="undefined" && typeof moduleId !== "undefined" && lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId)
    } else {
      // topics=[]
      emptyTopic()
    }
    console.log(topics)
  }, [moduleId, lessonId])

  return (
      <ul className={"nav nav-pills"}>
        {topics.map(topic =>
            <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`}>
              <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                  updateItem={updateTopic}
                  deleteItem={deleteTopic}
                  item={topic}
                  active={topic._id === topicId}/>
            </li>
        )}
        <li className="nav-item">
          <div className={"container-fluid"}>
            <button onClick={() => createTopic(lessonId)}>
              <i className="fa fa-plus fa-2x"></i>
            </button>
          </div>
        </li>
      </ul>
  )
}

const stpm = (state) => ({
  topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
  findTopicsForLesson: (lessonId) => {
    topicService.findTopicsForLesson(lessonId).then(topics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics: topics
    }))
  },
  createTopic: (lessonId) => {
    topicService.createTopic(lessonId, {title: "New Topic"})
    .then(actualTopic => dispatch({
      type: "CREATE_TOPIC",
      topic: actualTopic
    }))
  },
  updateTopic: (topic) => {
    topicService.updateTopic(topic._id, topic)
    .then(status => dispatch({
      type: "UPDATE_TOPIC",
      updatedTopic: topic
    }))
  },
  deleteTopic: (item) => {
    topicService.deleteTopic(item._id)
    .then(status => dispatch({
      type: "DELETE_TOPIC",
      topicToDelete: item
    }))
  },
  emptyTopic: () => {
    dispatch({
      type: "EMPTY_TOPIC"
    })
  }
})

export default connect(stpm, dtpm)(TopicPills)