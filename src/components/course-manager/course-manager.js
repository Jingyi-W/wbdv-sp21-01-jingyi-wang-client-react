import React from 'react'
import CourseTable from "../course-table/course-table.js"
import CourseGrid from "../course-grid/course-grid.js"
import {Route} from "react-router-dom";
import courseService from "../../services/course-service.js"

export default class CourseManager extends React.Component {
  state = {
    courses: [],
    picNames: ["https://code.makery.ch/library/html-css/part7/bootstrap-logo.png",
      "https://miro.medium.com/max/1400/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
      "https://www.ma-no.org/cache/galleries/contents-1634/960-400/admin-jquery-vs-javascript-002-impjpg.webp",
      "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"],
    inputedNewCourseTitle: ""
  }

  componentDidMount() {
    courseService.findAllCourses().then(courseList => this.setState({courses: courseList}))
  }

  addCourse = () => {
    let newCourse = {
      title: this.state.inputedNewCourseTitle,
      owner: "me",
      lastModified: "2/10/2021"
    }
    courseService.createCourse(newCourse).then(actualCourse => {
      this.state.courses.push(actualCourse)
      this.setState(this.state)
    })
    this.setState({inputedNewCourseTitle: ""})

  }

  deleteCourse = (course) => {
    // courseService.deleteCourse(courseId).then(status => {
    //   this.setState({courses: this.state.courses.filter(c => c._id != courseId)})
    // })
    courseService.deleteCourse(course._id).then(status => {
      this.setState((prevState) => ({...prevState, courses: prevState.courses.filter(c => c._id !== course._id)}))
    })
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
    .then(status => {
      this.setState((prevState) => {
        let nextState = {...prevState}
        nextState.courses = prevState.courses.map(c => {
          if(c._id === course._id) {
            return course
          } else {
            return c
          }
        })
        return nextState
      })
    })
  }

  render() {
    return (
        <div className="zero-margin">
          <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="col-1 align-center">
              <button>
                <i className="fa fa-2x fa-align-justify"></i>
              </button>
            </div>
            <div className="col-2 d-none d-lg-table-cell" style={{color: "white", "font-size": "x-large", 'text-algin': "center"}}>
              Course Manager
            </div>

            <div className="col-8">
              <input className="form-control"
                     type="text"
                     placeholder="New Course Title"
                     value={this.state.inputedNewCourseTitle}
                     onChange={(e) => this.setState({inputedNewCourseTitle: e.target.value})}/>
            </div>
            <div className="col-1">
              <button onClick={this.addCourse}>
                <i className="fa fa-plus-circle fa-2x"></i>
              </button>
            </div>
          </nav>

          <Route path={"/courses/table"} component={() =>
              <CourseTable
                  deleteCourse={this.deleteCourse}
                  updateCourse={this.updateCourse}
                  courses={this.state.courses}/>}/>
          <Route path={"/courses/grid"}>
            <CourseGrid
                courses={this.state.courses}
                picNames={this.state.picNames}
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}/>
          </Route>

          <div className={"container-fluid"}>
            <button className={"float-right"} onClick={this.addCourse}>
              <i className="fa fa-plus-circle fa-2x"></i>
            </button>
          </div>

        </div>
    )
  }
}

// export default CourseManager