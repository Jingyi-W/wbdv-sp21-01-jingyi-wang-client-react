import React, {useState} from 'react'

const HeadingWidget = ({widget, deleteWidget, updateWidget}) => {

  const [editing, setEditing] = useState(false)
  const [cachedWidget, setCachedWidget] = useState(widget)

  return (
      <div className={"container-fluid"}>
        {
          !editing &&
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-10"}>
                { widget.size ===1 && <h1>{widget.text}</h1>}
                { widget.size ===2 && <h2>{widget.text}</h2>}
                { widget.size ===3 && <h3>{widget.text}</h3>}
                { widget.size ===4 && <h4>{widget.text}</h4>}
                { widget.size ===5 && <h5>{widget.text}</h5>}
                { widget.size ===6 && <h6>{widget.text}</h6>}
              </div>
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
                  <input className={"form-control"}
                         placeholder={widget.text}
                         type={"text"}
                         onChange={(e) => {
                           setCachedWidget({
                             ...widget,
                             text: e.target.value
                           })
                         }}
                         value={cachedWidget.text}/>
                </div>
                <div className={"row"}>
                  <select onChange={(e) => setCachedWidget({...widget, size: parseInt(e.target.value)} )} value={cachedWidget.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                  </select>
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


export default HeadingWidget