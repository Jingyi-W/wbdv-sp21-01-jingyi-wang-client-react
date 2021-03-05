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
              <TopicPills/>
            </div>
          </div>
        </div>

      </Provider>
  )
}

const CourseEditor2 = ({history}) =>
    <div className="style.zero-margin">

      <div className="row">

        <div className="container-fluid">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="col-md-1 align-center">
              <button className="nav-link bg-secondary align-center"
                 onClick={() => history.goBack()}>
                <i className="dark-grey-color fa fa-2x fa-backspace"></i>
              </button>
            </div>

            <div className={"col-md-1 align-center"}>
              <Link to={"/courses"}>Course Manager</Link>
            </div>

            <div className="col-md-2 align-center white-color xlarge-font-size">
              CS5600 WebDev
            </div>

            <ul className="col-md-8 nav nav-tabs nav-fill">
              <li className="nav-item"><Link
                  className="nav-link light-grey-color large-font-size"
                  to="#">Build</Link></li>
              <li className="nav-item"><Link
                  className="nav-link large-font-size active"
                  aria-current="page">Pages</Link></li>
              <li className="nav-item"><Link
                  className="nav-link light-grey-color large-font-size"
                  to="#">Theme</Link></li>
              <li className="nav-item"><Link
                  className="nav-link light-grey-color large-font-size"
                  to="#">Store</Link></li>
              <li className="nav-item"><Link
                  className="nav-link light-grey-color large-font-size"
                  to="#">Apps</Link></li>
              <li className="nav-item"><Link
                  className="nav-link light-grey-color large-font-size"
                  to="#">Settings</Link></li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabIndex="-1"
                   aria-disabled="true">
                  <i className="fa fa-2x fa-plus"></i>
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="fixed-side-nav bg-dark">
            <ul className="list-group">
              <li className="list-group-item"
                  style={{"background-color": "darkgray"}}>
                <Link to="#">Module1-jQuery</Link>
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item active" aria-current="page">
                <Link to="#">Module2-React</Link>
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item"
                  style={{"background-color": "darkgray"}}>
                <Link to="#">Module3-Redux</Link>
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item"
                  style={{"background-color": "darkgray"}}>
                <Link to="#">Module4-Native</Link>
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item"
                  style={{"background-color": "darkgray"}}>
                <Link to="#">Module5-Angular</Link>
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item"
                  style={{"background-color": "darkgray"}}>
                <Link to="#">Module6-Node</Link>
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item"
                  style={{"background-color": "darkgray"}}>
                <Link to="#">Module7-Mongo</Link>
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item"
                  style={{"background-color": "darkgray"}}>
                <i className="pull-right fa fa-plus"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-8">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <label className="row"></label>
                <button type="button" className="btn btn-secondary topic-btn"
                        style={{"font-size": "24px"}}>Topic 1
                </button>
                <button type="button" className="btn btn-secondary topic-btn"
                        style={{"font-size": "24px"}}>Topic 2
                </button>
                <button type="button" className="btn btn-secondary topic-btn"
                        style={{"font-size": "24px"}}>Topic 3
                </button>
                <button type="button" className="btn btn-secondary topic-btn"
                        style={{"font-size": "24px"}}>Topic 4
                </button>
                <button type="button" className="btn btn-secondary topic-btn"
                        style={{"font-size": "24px"}}>
                  <Link className="topic-link" style={{"color": "white"}} to="#">
                    <i className="fa fa-plus"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <br/>

          <div>
            <Link to={"/courses"}>Course Manager</Link>
          </div>
        </div>

      </div>


    </div>

export default CourseEditor