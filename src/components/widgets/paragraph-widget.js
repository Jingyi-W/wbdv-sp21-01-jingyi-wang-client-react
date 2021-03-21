import React, {useState, useParam} from 'react'
import TypeDropdown from "./type-dropdown";
import EditingParagraph from "./editing-paragraph";
import EditingHeading from "./editing-heading";
import Buttons from "./widget-buttons";

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


export default ParagraphWidget