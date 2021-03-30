import React, {useState} from 'react'
import Buttons from "./widget-buttons"
import EditingContent from "./editing-contents/editing-contents";

const ImageWidget = ({widget, deleteWidget, updateWidget}) => {

  const [editing, setEditing] = useState(false)
  const [cachedWidget, setCachedWidget] = useState(widget)

  return (
      <div className={"container-fluid"}>
        {
          !editing &&
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-10"}>
                <img src={widget.url} width={widget.width} height={widget.height}/>
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


export default ImageWidget