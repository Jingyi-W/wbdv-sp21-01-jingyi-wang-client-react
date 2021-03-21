import React, {useState, useParam} from 'react'

const ParagraphWidget = ({widget, deleteWidget, updateWidget}) => {
  const [editing, setEditing] = useState(false)
  const [cachedWidget, setCachedWidget] = useState(widget)

  return (
      <div className={"container-fluid"}>
        {
          !editing &&
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-10"}><p>{widget.text}</p></div>
              <div className={"col-2"}>
                <i onClick={() => {
                  setEditing(true)
                }} className="float-right fa fa-cog fa-lg"></i>
              </div>
            </div>
          </div>
        }
        {
          editing &&
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-10"}>
                <div className={"row"}>
                  <select className={"form-control"} value={cachedWidget.type} onChange={(e) =>{
                    setCachedWidget({...widget, type:e.target.value})
                  }}>
                    <option value={"HEADING"}>Heading</option>
                    <option value={"LIST"}>List</option>
                    <option value={"PARAGRAPH"}>Paragraph</option>
                    <option value={"IMAGE"}>Image</option>
                    <option value={"YOUTUBE"}>Youtube</option>
                    <option value={"HTML"}>HTML</option>
                    <option value={"LINK"}>Link</option>
                  </select>
                </div>
                <div className={"row"}>
                  <textarea className={"form-control"}
                            value={cachedWidget.text}
                            placeholder={widget.text}
                            onChange={(e) => {
                              setCachedWidget({
                                ...widget,
                                text: e.target.value
                              })
                            }}>
                  </textarea>
                </div>
              </div>
              <div className={"col-2"}>
                <i onClick={() => {
                  updateWidget(cachedWidget)
                  setEditing(false)
                  setCachedWidget({text:"", type:cachedWidget.type, size: cachedWidget.size})
                }} className="pull-right fa fa-check fa-lg"></i>
                <i onClick={() => {
                  deleteWidget(widget)
                  setEditing(false)
                  setCachedWidget({text:"", type:cachedWidget.type, size: cachedWidget.size})
                }} className="pull-right fa fa-trash fa-lg"></i>
              </div>

            </div>
          </div>
        }
      </div>
  )
}


export default ParagraphWidget