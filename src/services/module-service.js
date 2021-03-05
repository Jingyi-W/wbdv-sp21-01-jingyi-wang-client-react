
const BASE_URL = "https://wbdv-generic-server.herokuapp.com/api/001376776"

const createModule = (courseId, module) =>
  fetch(`${BASE_URL}/courses/${courseId}/modules`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(module)
  }).then(response => response.json())


const findModulesForCourse = (courseId) => fetch(`${BASE_URL}/courses/${courseId}/modules`).then(response => response.json())


const findModule = (moduleId) =>
  fetch(`${BASE_URL}/modules/${moduleId}`).then(response => response.json())


const updateModule = (moduleId, module) =>
  fetch(`${BASE_URL}/modules/${moduleId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(module)
  }).then(response => response.json())


const deleteModule = (moduleId) =>
  fetch(`${BASE_URL}/modules/${moduleId}`, {method: 'DELETE'}).then(response => response.json())


const api = {
  createModule: createModule,
  findModulesForCourse: findModulesForCourse,
  findModule: findModule,
  updateModule: updateModule,
  deleteModule: deleteModule
}

export default api