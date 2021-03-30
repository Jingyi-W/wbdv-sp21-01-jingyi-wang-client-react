// const BASE_URL = "https://wbdv-jingyi-server-java.herokuapp.com/api/"
const BASE_URL = "http://localhost:8080/api/"

const createWidget = (topicId, widget) =>
    fetch(`${BASE_URL}/topics/${topicId}/widgets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(widget)
    }).then(response => response.json())


const findWidgetsForTopic = (topicId) =>
    fetch(`${BASE_URL}/topics/${topicId}/widgets`).then(response => response.json())

const findAllWidgets = () =>
    fetch(`${BASE_URL}/widgets`).then(response => response.json())

const findWidgetById = (widgetId) =>
    fetch(`${BASE_URL}/widgets/${widgetId}`).then(response => response.json())


const updateWidget = (widgetId, widget) =>
    fetch(`${BASE_URL}/widgets/${widgetId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(widget)
    }).then(response => response.json())


const deleteWidget = (widgetId) =>
    fetch(`${BASE_URL}/widgets/${widgetId}`, {method: 'DELETE'}).then(response => response.json())


export default {
  createWidget, findWidgetsForTopic, findAllWidgets, findWidgetById, updateWidget, deleteWidget
}