import React, {useState, useParam} from 'react'
import TypeDropdown from "./editing-contents/type-dropdown";
import EditingParagraph from "./editing-contents/editing-paragraph";
import EditingHeading from "./editing-contents/editing-heading";
import Buttons from "./widget-buttons";
import EditingContent from "./editing-contents/editing-contents";

const ListWidget = ({widget, deleteWidget, updateWidget}) => {
  const [editing, setEditing] = useState(false)
  const [cachedWidget, setCachedWidget] = useState(widget)

  return (
      <div className={"container-fluid"}>
        {
          !editing &&
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-10"}>
                {!widget.isOrderedList &&
                  <ul>
                    {widget.text.split("\n").map(item => {
                      return <li>{item}</li>
                    })}
                  </ul>}
                {widget.isOrderedList &&
                <ol>
                  {widget.text.split("\n").map(item => {
                    return <li>{item}</li>
                  })}
                </ol>}
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


export default ListWidget