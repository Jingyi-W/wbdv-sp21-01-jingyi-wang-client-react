import React, {useState} from 'react'
import Buttons from "./widget-buttons"
import EditingContent from "./editing-contents/editing-contents";

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
                <Buttons.EditButton setEditing={setEditing}/>
              </div>
            </div>
          </div>
        }
        {
          editing &&
          <EditingContent widget={widget}
                          updateWidget={updateWidget}
                          deleteWidget={deleteWidget}
                          setEditing={setEditing}
                          cachedWidget={cachedWidget}
                          setCachedWidget={setCachedWidget}/>
        }
      </div>



  )

}


export default HeadingWidget