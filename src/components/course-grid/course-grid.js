import React from 'react'
import {Link} from "react-router-dom";
import CourseRow from "../course-table/course-row";
import CourseCard from "./course-card";

const CourseGrid = ({courses, picNames, deleteCourse, updateCourse}) => {
  return <div className="zero-margin">
    <table className="table wbdv-course-table">
      <thead>
      <tr className={"d-flex"}>
        <th className={"col-lg-4 text-left d-none d-md-table-cell"}>Recent Documents</th>
        <th className={"col-lg-4 text-center d-none d-md-table-cell"}>Owned by me</th>
        <th className={"col-lg-4 text-right justify-content-right"} align="right">
          <Link to="#">
            <i className="fa fa-lg fa-file" style={{color: "black"}}></i>
          </Link>
          &nbsp;
          <Link to="#">
            <i className="fa fa-lg fa-font" style={{color: "black"}}></i>
          </Link>
          &nbsp;
          <Link to={"/courses/table"}>
            <i className="fa fa-lg fa-table" style={{color: "black"}}></i>
          </Link>
        </th>
      </tr>
      </thead>
    </table>

    <div className="container-fluid mt-4 row justify-content-left">
      {courses.map((course, idx) => <CourseCard course={course} picName={picNames[idx % picNames.length]} deleteCourse={deleteCourse} updateCourse={updateCourse}/>)}
    </div>

  </div>
}


export default CourseGrid