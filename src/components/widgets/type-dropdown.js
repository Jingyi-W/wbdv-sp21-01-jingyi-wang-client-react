import React from 'react'

const TypeDropdown = ({widget, cachedWidget, setCachedWidget, updateWidget}) => {
  return (
      <select className={"form-control"} value={cachedWidget.type} onChange={(e) =>{
        setCachedWidget({...widget, type:e.target.value})
        // updateWidget(cachedWidget)
      }}>
        <option value={"HEADING"}>Heading</option>
        <option value={"LIST"}>List</option>
        <option value={"PARAGRAPH"}>Paragraph</option>
        <option value={"IMAGE"}>Image</option>
        <option value={"YOUTUBE"}>Youtube</option>
        <option value={"HTML"}>HTML</option>
        <option value={"LINK"}>Link</option>
      </select>
  )
}

export default TypeDropdown