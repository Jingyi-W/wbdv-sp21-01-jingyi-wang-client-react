import React from 'react'

const EditingList = ({widget, cachedWidget, setCachedWidget, updateWidget}) => {
  return (
      <div>
        <input type={"checkbox"}
               onChange={(e) => {
                  setCachedWidget({
                    ...cachedWidget,
                    isOrderedList: e.target.checked
                  })
               }}/>Ordered
        <br/>
        List items
        <div className={"row"}>
          <textarea className={"form-control"}
                    rows={10}
                    value={cachedWidget.text}
                    onChange={(e) => {
                      setCachedWidget({
                        ...cachedWidget,
                        text: e.target.value
                      })
                    }}>

          </textarea>
        </div>

      </div>

  )
}

export default EditingList