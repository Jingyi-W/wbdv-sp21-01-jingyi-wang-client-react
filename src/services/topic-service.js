const BASE_URL = "https://wbdv-generic-server.herokuapp.com/api/001376776"

const createTopic = (lessonId, topic) =>
  fetch(`${BASE_URL}/lessons/${lessonId}/topics`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(topic)
  }).then(response => response.json())


const findTopicsForLesson = (lessonId) =>
  fetch(`${BASE_URL}/lessons/${lessonId}/topics`).then(response => response.json())


const findTopic = (topicId) =>
  fetch(`${BASE_URL}/topics/${topicId}`).then(response => response.json())


const updateTopic = (topicId, topic) =>
  fetch(`${BASE_URL}/topics/${topicId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(topic)
  }).then(response => response.json())


const deleteTopic = (topicId) =>
  fetch(`${BASE_URL}/topics/${topicId}`, {method: 'DELETE'}).then(response => response.json())


export default {
  createTopic, findTopicsForLesson, findTopic, updateTopic, deleteTopic
}