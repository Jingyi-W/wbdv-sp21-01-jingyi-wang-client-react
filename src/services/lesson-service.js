
const BASE_URL = "https://wbdv-generic-server.herokuapp.com/api/001376776"

const createLesson = (moduleId, lesson) =>
  fetch(`${BASE_URL}/modules/${moduleId}/lessons`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(lesson)
  }).then(response => response.json())


const findLessonsForModule = (moduleId) =>
  fetch(`${BASE_URL}/modules/${moduleId}/lessons`).then(response => response.json())


const findLesson = (lessonId) =>
  fetch(`${BASE_URL}/lessons/${lessonId}`).then(response => response.json())


const updateLesson = (lessonId, lesson) =>
  fetch(`${BASE_URL}/lessons/${lessonId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(lesson)
  }).then(response => response.json())


const deleteLesson = (lessonId) =>
  fetch(`${BASE_URL}/lessons/${lessonId}`, {method: 'DELETE'}).then(response => response.json())


export default {
  createLesson, findLessonsForModule, findLesson, updateLesson, deleteLesson
}