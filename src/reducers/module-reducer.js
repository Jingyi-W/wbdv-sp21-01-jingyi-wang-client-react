const initialState = {
  modules: []
};

const moduleReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
      return {
        ...prevState,
        modules: [
            ...prevState.modules,
            action.module
        ]
      }
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...prevState,
        modules: action.modules
      }
    case "FIND_MODULE":
      return {
        ...prevState,
        module: action.module
      }
    case "UPDATE_MODULE":
      return {
        ...prevState,
        modules: prevState.modules.map(module => {
          if (module._id === action.updatedModule._id) {
            return action.updatedModule
          } else {
            return module
          }
        })
      }
    case "DELETE_MODULE":
      return {
        ...prevState,
        modules: prevState.modules.filter(module => module._id !== action.moduleToDelete._id)
      }
    default:
      return prevState
  }
}

export default moduleReducer