import React from 'react'
import CourseRow from './course-row'
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="zero-margin">
          <table className="table wbdv-course-table">
            <thead>
              <tr className={"d-flex"}>
                <th className={"col-lg-4 text-left"}>Title</th>
                <th className={"col-lg-2 text-right d-none d-md-table-cell"}>Owned by</th>
                <th className={"col-lg-4 text-center d-none d-lg-table-cell"}>Last modified by me</th>
                <th className={"col-lg-2 text-right justify-content-right"} align="right">
                  <Link to="#">
                    <i className="fa fa-lg fa-file" style={{color: "black"}}></i>
                  </Link>
                  &nbsp;
                  <Link to="#">
                    <i className="fa fa-lg fa-font" style={{color: "black"}}></i>
                  </Link>
                  &nbsp;
                  <Link to={"/courses/grid"}>
                    <i className="fa fa-lg fa-th" style={{color: "black"}}></i>
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              {
                this.props.courses.map(course => <CourseRow course={course} deleteCourse={this.props.deleteCourse} updateCourse={this.props.updateCourse}/>)
              }
            </tbody>
          </table>
        </div>
    )
  }
}