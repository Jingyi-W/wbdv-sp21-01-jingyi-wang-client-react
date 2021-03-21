import React, {useState} from 'react'
import TypeDropdown from "./type-dropdown";
import EditingHeading from "./editing-heading";
import EditingParagraph from "./editing-paragraph";
import Buttons from "./widget-buttons"

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
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-10"}>
                <div className={"row"}>
                  <TypeDropdown widget={widget} cachedWidget={cachedWidget} setCachedWidget={setCachedWidget} updateWidget={updateWidget}/>
                </div>
                {cachedWidget.type === "PARAGRAPH" &&
                <EditingParagraph widget={widget} cachedWidget={cachedWidget} setCachedWidget={setCachedWidget} updateWidget={updateWidget}/>}
                {cachedWidget.type === "HEADING" &&
                <EditingHeading widget={widget} cachedWidget={cachedWidget} setCachedWidget={setCachedWidget} updateWidget={updateWidget}/>}

              </div>
              <div className={"col-2"}>
                <Buttons.UpdateButton updateWidget={updateWidget} cachedWidget={cachedWidget} setEditing={setEditing} setCachedWidget={setCachedWidget}/>
                <Buttons.DeleteButton deleteWidget={deleteWidget} setEditing={setEditing} widget={widget} setCachedWidget={setCachedWidget} cachedWidget={cachedWidget}/>
              </div>
            </div>
          </div>
        }
      </div>



  )

}


export default HeadingWidget