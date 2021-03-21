import React from 'react'

const EditingHeading = ({widget, cachedWidget, setCachedWidget, updateWidget}) => {
  return (
      <div>
        <div className={"row"}>
          <input className={"form-control"}
                 placeholder={widget.text}
                 type={"text"}
                 onChange={(e) => {
                   setCachedWidget({
                     ...cachedWidget,
                     text: e.target.value
                   })
                   // updateWidget(cachedWidget)
                 }}
                 value={cachedWidget.text}/>
        </div>
        <div className={"row"}>
          <select onChange={(e) => {
            setCachedWidget({...cachedWidget, size: parseInt(e.target.value)})
            // updateWidget(cachedWidget)
          }} value={cachedWidget.size} className="form-control">
            <option value={1}>Heading 1</option>
            <option value={2}>Heading 2</option>
            <option value={3}>Heading 3</option>
            <option value={4}>Heading 4</option>
            <option value={5}>Heading 5</option>
            <option value={6}>Heading 6</option>
          </select>
        </div>
      </div>

  )
}

export default EditingHeading