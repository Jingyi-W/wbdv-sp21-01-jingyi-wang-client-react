const initialState = {
  widgets: [],
  theWidget: null
}

const widgetReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      return {
        ...prevState,
        widgets: [
          ...prevState.widgets,
          action.widget
        ]
      }
    case "FIND_ALL_WIDGETS_FOR_TOPIC":
      return {
        ...prevState,
        widgets: action.widgets
      }
    case "FIND_ALL_WIDGETS":
      return {
        ...prevState,
        widgets: action.widgets
      }
    case "FIND_WIDGET":
      return {
        ...prevState,
        theWidget: action.theWidget
      }
    case "UPDATE_WIDGET":
      return {
        ...prevState,
        widgets: prevState.widgets.map(widget => {
          if (widget.id === action.updatedWidget.id) {
            return action.updatedWidget
          } else {
            return widget
          }
        })
      }
    case "DELETE_WIDGET":
      return {
        ...prevState,
        widgets: prevState.widgets.filter(widget => widget.id !== action.widgetToDelete.id)
      }
    case "EMPTY_WIDGETS":
      return {
        ...prevState,
        widgets: []
      }
    default:
      return prevState
  }
}

export default widgetReducer