import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service"
import LessonTabs from "./lesson-tabs";
import ModuleList from "./module-list";
import TopicPills from "./topic-pills";

const reducer = combineReducers({moduleReducer: moduleReducer, lessonReducer: lessonReducer, topicReducer: topicReducer} )

const store = createStore(reducer)

const CourseEditor = () => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  const [courseTitle, setCourseTitle] = useState("")
  useEffect(() => {
    courseService.findCourseById(courseId).then(actualCourse => {
      setCourseTitle(actualCourse.title)
    })
  }, [courseId])
  return (
      <Provider store={store}>
        <div className="row container-fluid">
          <div className="col-1 align-center">
            <button className="align-center">
              <Link to={`/courses/${layout}`}>
                <i className="fa fa-2x fa-backspace"></i>
              </Link>
            </button>
          </div>
          <h1>
            <div className="col-3 float-left">
              {courseTitle}
            </div>
          </h1>
        </div>

        <div className={"row"}>
          <div className={"col-4"}>
            <ModuleList/>
          </div>
          <div className={"col-8"}>
            <div className={"row"}>
              <LessonTabs/>
            </div>
            <div className={"row"}>
              <p></p>
            </div>
            <div className={"row"}>
              <TopicPills/>
            </div>
          </div>
        </div>

      </Provider>
  )
}

export default CourseEditor