const COURSE_URL = "https://wbdv-generic-server.herokuapp.com/api/001376776/courses"

const createCourse = (course) => fetch(COURSE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(course)
  }).then(response => response.json())

const findAllCourses = () => fetch(COURSE_URL).then(response => response.json())

const findCourseById = (courseId) => fetch(`${COURSE_URL}/${courseId}`).then(response => response.json())

const updateCourse = (courseId, course) => fetch(`${COURSE_URL}/${courseId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(course)
  }).then(response => response.json())

const deleteCourse = (courseId) => fetch(`${COURSE_URL}/${courseId}`, {method: 'DELETE'}).then(response => response.json())

const api = {
  createCourse: createCourse,
  deleteCourse: deleteCourse,
  findAllCourses: findAllCourses,
  findCourseById: findCourseById,
  updateCourse: updateCourse
}
export default api