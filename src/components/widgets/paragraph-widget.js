import React, {useState, useParam} from 'react'
import TypeDropdown from "./editing-contents/type-dropdown";
import EditingParagraph from "./editing-contents/editing-paragraph";
import EditingHeading from "./editing-contents/editing-heading";
import Buttons from "./widget-buttons";
import EditingContent from "./editing-contents/editing-contents";

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


export default ParagraphWidget