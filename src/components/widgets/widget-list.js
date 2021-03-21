import React,{useState, useEffect} from 'react'
import {connect} from "react-redux";
import widgetService from "../../services/widget-service";
import {useParams} from "react-router-dom";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = ({
  widgets=[],
  theWidget=null,
  findWidgetsForTopic=()=>[],
  findAllWidgets,
  findWidgetById,
  createWidget,
  updateWidget,
  deleteWidget,
  emptyWidgets
}) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams()
  const [editing, setEditing] = useState(false)
  const [cachedWidget, setCahedWidget] = useState(theWidget)

  useEffect(() => {
    if (moduleId !=="undefined" && typeof moduleId !== "undefined"
        && lessonId !== "undefined" && typeof lessonId !== "undefined"
        && topicId !== "undefined" && typeof topicId !=="undefined") {
      findWidgetsForTopic(topicId)
    } else {
      emptyWidgets()
    }
  }, [moduleId, lessonId, topicId])

  return (
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-11"}>
            <h1>Widget List</h1>
          </div>
          <div  className="col-1">
            <button className={"float-right"} onClick={() => {
              if (topicId !== "undefined" && typeof topicId !== "undefined") {
                createWidget(topicId)
                // findWidgetsForTopic(topicId)
              } else {
                alert("Please select a topic first!")
              }
            }
            }>
              <i className="fa fa-plus fa-2x"></i>
            </button>
          </div>
        </div>

        <ul className={"list-group"}>
          {widgets.map(widget => (
              <li key={widget.id} className={"list-group-item"}>
                {widget.type === "HEADING" && <HeadingWidget widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>}
                {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>}
              </li>
          ))}
        </ul>
      </div>
  )
}

const stpm = (state) => ({
  widgets: state.widgetReducer.widgets,
  theWidget: null
})

const dtpm = (dispatch) => ({
  createWidget: (topicId) => {
    widgetService.createWidget(topicId, {text: "New Heading Widget", type: "HEADING", size: 1})
    .then(actualWidget => dispatch({
      type: "CREATE_WIDGET",
      widget: actualWidget
    }))
  },
  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId).then(widgets => dispatch({
      type: "FIND_ALL_WIDGETS_FOR_TOPIC",
      widgets: widgets
    }))
  },
  findAllWidgets: () => {
    widgetService.findAllWidgets().then(widgets => dispatch({
      type: "FIND_ALL_WIDGETS",
      widgets: widgets
    }))
  },
  findWidgetById: (widgetId) => {
    widgetService.findWidgetById(widgetId).then(widget => dispatch({
      type: "FIND_WIDGET",
      theWidget: widget
    }))
  },
  updateWidget: (widget) => {
    widgetService.updateWidget(widget.id, widget)
    .then(status => dispatch({
      type: "UPDATE_WIDGET",
      updatedWidget: widget
    }))
  },
  deleteWidget: (item) => {
    widgetService.deleteWidget(item.id)
    .then(status => dispatch({
      type: "DELETE_WIDGET",
      widgetToDelete: item
    }))
  },
  emptyWidgets: () => {
    dispatch({
      type: "EMPTY_WIDGETS"
    })
  }
})


export default connect(stpm, dtpm)(WidgetList)