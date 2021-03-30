import React from 'react'
import TypeDropdown from "./type-dropdown";
import EditingParagraph from "./editing-paragraph";
import EditingHeading from "./editing-heading";
import Buttons from "../widget-buttons";
import EditingList from "./editing-list";
import EditingImage from "./editing-image";

const EditingContent = ({widget, cachedWidget, setCachedWidget, updateWidget, setEditing, deleteWidget}) =>
    <div className={"container-fluid"}>
      <div className={"row"}>
        <div className={"col-10"}>
          <div className={"row"}>
            <TypeDropdown widget={widget}
                          cachedWidget={cachedWidget}
                          setCachedWidget={setCachedWidget}
                          updateWidget={updateWidget}/>
          </div>
          {cachedWidget.type === "PARAGRAPH" &&
          <EditingParagraph widget={widget}
                            cachedWidget={cachedWidget}
                            setCachedWidget={setCachedWidget}
                            updateWidget={updateWidget}/>}
          {cachedWidget.type === "HEADING" &&
          <EditingHeading widget={widget}
                          cachedWidget={cachedWidget}
                          setCachedWidget={setCachedWidget}
                          updateWidget={updateWidget}/>}
          {cachedWidget.type === "LIST" &&
          <EditingList widget={widget}
                          cachedWidget={cachedWidget}
                          setCachedWidget={setCachedWidget}
                          updateWidget={updateWidget}/>}
          {cachedWidget.type === "IMAGE" &&
          <EditingImage widget={widget}
                          cachedWidget={cachedWidget}
                          setCachedWidget={setCachedWidget}
                          updateWidget={updateWidget}/>}
        </div>
        <div className={"col-2"}>
          <Buttons.UpdateButton updateWidget={updateWidget}
                                cachedWidget={cachedWidget}
                                setEditing={setEditing}
                                setCachedWidget={setCachedWidget}/>
          <Buttons.DeleteButton deleteWidget={deleteWidget}
                                setEditing={setEditing}
                                widget={widget}
                                setCachedWidget={setCachedWidget}
                                cachedWidget={cachedWidget}/>
        </div>
      </div>
    </div>

export default EditingContent