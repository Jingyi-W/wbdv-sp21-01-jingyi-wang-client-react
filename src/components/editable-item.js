import React, {useState} from "react";
import {Link} from "react-router-dom";

const EditableItem = ({
    to="/",
    deleteItem,
    updateItem,
    item,
    active,
}) => {
  const [editing, setEditing] = useState(false)
  const [cachedItem, setCahedItem] = useState(item)
  return (<div className={"container-fluid"}>
    {
      !editing &&
      <div className={`row ${active?'active':''}`}>
        <Link className={"nav-link"} to={to}>
          {item.title}
        </Link>
        <i onClick={() => {
          setEditing(true)
        }} className="float-right fa fa-edit fa-lg"></i>
      </div>
    }
    {
      editing &&
      <div className={"row active"}>
        <input className={"form-control"}
               placeholder={item.title}
               type={"text"}
               onChange={(e) => {
                 setCahedItem({
                   ...item,
                   title: e.target.value
                 })
               }}
               value={cachedItem.title}/>
        <i onClick={() => {
          updateItem(cachedItem)
          setEditing(false)
          setCahedItem({title:""})
        }} className="pull-right fa fa-check fa-lg"></i>
        <i onClick={() => {
          deleteItem(item)
          setEditing(false)
          setCahedItem({title:""})
        }} className="pull-right fa fa-trash fa-lg"></i>
      </div>
    }
  </div>)
}

export default EditableItem