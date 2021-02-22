import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, picName, deleteCourse, updateCourse}) => {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(course.title)

  const saveCourse = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: title
    }
    updateCourse(newCourse)
  }

  return <div className="col-auto mb-3">
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" width={500} height={200} src={picName}
           alt="Card image cap"/>
      <div className="card-body">
        {!editing && <h5 className="card-title">{course.title}</h5>}
        {editing && <input
            className={"form-control"}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder={course.title}
            type={"text"}/>}
        <p className="card-text">Some quick example text to build on the
          card title and make up the bulk of the card's content.</p>
        <Link to="/editor" className="card-link">{course.title}</Link>
        {!editing && <button className="float-right" onClick={() => setEditing(true)}>
          <i className="float-right fa fa-edit fa-lg wbdv-course-edit"></i>
        </button>}
        {editing && <button className="float-right" onClick={() => deleteCourse(course)}>
          <i className="float-right fa fa-trash fa-lg wbdv-course-remove"></i>
        </button>}
        &nbsp;
        {editing && <button className="float-right" onClick={() => saveCourse()}>
        <i className="float-right fa fa-check fa-lg wbdv-course-save"></i>
        </button>}
      </div>
    </div>
  </div>
}

export default CourseCard
