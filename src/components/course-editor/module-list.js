import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import moduleService from "../../services/module-service";
import {connect} from "react-redux";
import EditableItem from "../editable-item";


const ModuleList = ({
    modules=[],
    createModule,
    deleteModule,
    updateModule,
    findModulesForCourse
  }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {findModulesForCourse(courseId)}, [courseId]);
    return (
        <div className={"container-fluid"}>
          <ul className={"nav flex-column list-group nav-fill"}>
            {modules.map(module =>
                <li className={`nav-item list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                  <EditableItem
                      to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                      updateItem={updateModule}
                      deleteItem={deleteModule}
                      active={true}
                      item={module}/>
                </li>
            )}
            <li className="nav-item list-group-item">
              <div className={"container-fluid"}>
                <button onClick={() => createModule(courseId)}>
                  <i className="fa fa-plus fa-2x"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>

    )
  }

const stpm = (state) => {return {modules: state.moduleReducer.modules}}

const dtpm = (dispatch) => {
  return {
    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId).then(modules => dispatch({
          type: "FIND_MODULES_FOR_COURSE",
          modules: modules
        }))
    },
    createModule: (courseId) => {
      moduleService.createModule(courseId, {title: "New Module"})
        .then(actualModule => dispatch({
          type: "CREATE_MODULE",
          module: actualModule
        }))
    },
    updateModule: (module) => {
      moduleService.updateModule(module._id, module)
        .then(status => dispatch({
          type: "UPDATE_MODULE",
          updatedModule: module
        }))
    },
    deleteModule: (item) => {
      moduleService.deleteModule(item._id)
        .then(status => dispatch({
          type: "DELETE_MODULE",
          moduleToDelete: item
        }))
    }
  }
}

export default connect(stpm, dtpm)(ModuleList)