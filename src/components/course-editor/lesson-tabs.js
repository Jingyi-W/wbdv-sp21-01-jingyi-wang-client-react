import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import lessonService from "../../services/lesson-service";
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import moduleService from "../../services/module-service";

const LessonTabs = ({
    lessons=[],
    findLessonsForModule,
    createLesson,
    updateLesson,
    deleteLesson
}) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  useEffect(()=>{
    if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    }
  }, [moduleId])
  return (
      <ul className={"nav nav-tabs "}>
        {lessons.map(lesson =>
            <li className={`nav-item ${lesson._id === lessonId ? 'active' : ''}`}>
              <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                  updateItem={updateLesson}
                  deleteItem={deleteLesson}
                  item={lesson}/>
            </li>
        )}
        <li className="nav-item">
          <div className={"container-fluid"}>
            <button onClick={() => createLesson(moduleId)}>
              <i className="fa fa-plus fa-2x"></i>
            </button>
          </div>
        </li>
      </ul>
  )
}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
  findLessonsForModule: (moduleId) => {
    lessonService.findLessonsForModule(moduleId).then(lessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons: lessons
    }))
  },
  createLesson: (moduleId) => {
    lessonService.createLesson(moduleId, {title: "New Lesson"})
    .then(actualLesson => dispatch({
      type: "CREATE_LESSON",
      lesson: actualLesson
    }))
  },
  updateLesson: (lesson) => {
    lessonService.updateLesson(lesson._id, lesson)
    .then(status => dispatch({
      type: "UPDATE_LESSON",
      updatedLesson: lesson
    }))
  },
  deleteLesson: (item) => {
    lessonService.deleteLesson(item._id)
    .then(status => dispatch({
      type: "DELETE_LESSON",
      lessonToDelete: item
    }))
  }
})

export default connect(stpm, dtpm)(LessonTabs)