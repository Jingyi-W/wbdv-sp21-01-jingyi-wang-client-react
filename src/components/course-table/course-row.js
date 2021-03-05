import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({course, deleteCourse, updateCourse}) => {
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
  return (
      <tr className={"d-flex wbdv-course-tr"}>
        <td className={"col-lg-4 text-left wbdv-course-title"}>
          {!editing && <Link to={`/courses/table/edit/${course._id}`}>{course.title}</Link>}
          {editing && <input
              className={"form-control"}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder={course.title}
              type={"text"}/>}
        </td>
        <td className={"col-lg-2 text-right d-none d-md-table-cell wbdv-course-owned-by"}>{course.owner}</td>
        <td className={"col-lg-4 text-center d-none d-lg-table-cell wbdv-course-last-modified"}>{course.lastModified}</td>
        <td className={"col-lg-2 text-right justify-content-right wbdv-course-actions"} align="right">
          {!editing && <button onClick={() => setEditing(true)}>
            <i className="pull-right fa fa-edit fa-lg wbdv-course-edit"></i>
          </button>}
          {editing && <button onClick={() => deleteCourse(course)}>
            <i className="pull-right fa fa-trash fa-lg wbdv-course-remove"></i>
          </button>} &nbsp;
          {editing && <button onClick={() => saveCourse()}>
            <i className="pull-right fa fa-check fa-lg wbdv-course-save"></i>
          </button>}
        </td>
      </tr>
  )
}

export default CourseRow

// export default class CourseRow extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       editing: false,
//       title: ""
//     }
//   }
//
//   saveCourse = () => {
//     this.setState({editing: false})
//     const newCourse = {
//       ...this.props.course,
//       title: this.state.title
//     }
//     this.props.updateCourse(newCourse)
//   }
//
//   render() {
//     return (
//         <tr className={"d-flex wbdv-course-tr"}>
//           <td className={"col-lg-4 text-left wbdv-course-title"}>
//             {!this.state.editing && <Link to="/editor">{this.props.course.title}</Link>}
//             {this.state.editing && <input
//                 className={"form-control"}
//                 onChange={(e) => this.setState({title: e.target.value})}
//                 value={this.state.title}
//                 placeholder={this.props.course.title}
//                 type={"text"}/>}
//           </td>
//           <td className={"col-lg-2 text-right d-none d-md-table-cell wbdv-course-owned-by"}>{this.props.course.owner}</td>
//           <td className={"col-lg-4 text-center d-none d-lg-table-cell wbdv-course-last-modified"}>{this.props.course.lastModified}</td>
//           <td className={"col-lg-2 text-right justify-content-right wbdv-course-actions"} align="right">
//             {!this.state.editing && <button onClick={() => this.setState({editing: true})}>
//               <i className="pull-right fa fa-edit fa-lg wbdv-course-edit"></i>
//             </button>}
//             {this.state.editing && <button onClick={() => this.props.deleteCourse(this.props.course)}>
//               <i className="pull-right fa fa-trash fa-lg wbdv-course-remove"></i>
//             </button>} &nbsp;
//             {this.state.editing && <button onClick={() => this.saveCourse()}>
//               <i className="pull-right fa fa-check fa-lg wbdv-course-save"></i>
//             </button>}
//           </td>
//         </tr>
//     )
//   }
// }