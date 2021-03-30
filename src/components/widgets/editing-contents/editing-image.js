import React from 'react'

const EditingImage = ({widget, cachedWidget, setCachedWidget, updateWidget}) => {
  return (
      <div>
        <div className={"row"}>
          Image URL
        </div>
        <div className={"row"}>
          <input className={"form-control"}
                 placeholder={widget.url}
                 type={"text"}
                 onChange={(e) => {
                   setCachedWidget({
                     ...cachedWidget,
                     url: e.target.value
                   })
                   // updateWidget(cachedWidget)
                 }}
                 value={cachedWidget.url}/>
        </div>
        <div className={"row"}>
          Image width
        </div>
        <div className={"row"}>
          <input className={"form-control"}
                 placeholder={widget.width}
                 type={"text"}
                 onChange={(e) => {
                   setCachedWidget({
                     ...cachedWidget,
                     width: parseInt(e.target.value)
                   })
                   // updateWidget(cachedWidget)
                 }}
                 value={cachedWidget.width}/>
        </div>
        <div className={"row"}>
          Image height
        </div>
        <div className={"row"}>
          <input className={"form-control"}
                 placeholder={widget.height}
                 type={"text"}
                 onChange={(e) => {
                   setCachedWidget({
                     ...cachedWidget,
                     height: parseInt(e.target.value)
                   })
                   // updateWidget(cachedWidget)
                 }}
                 value={cachedWidget.height}/>
        </div>

      </div>

  )
}

export default EditingImage