import React from 'react'

const EditingParagraph = ({widget, cachedWidget, setCachedWidget, updateWidget}) => {
  return (
      <div className={"row"}>
          <textarea className={"form-control"}
                    value={cachedWidget.text}
                    placeholder={widget.text}
                    onChange={(e) => {
                      setCachedWidget({
                        ...cachedWidget,
                        text: e.target.value
                      })
                      // updateWidget(cachedWidget)
                    }}>
          </textarea>
      </div>
  )
}

export default EditingParagraph