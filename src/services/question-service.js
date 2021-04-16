
const QUIZZES_URL = 'https://wbdv-jingyi-server-node.herokuapp.com/api/quizzes';
// const QUIZZES_URL = 'http:/localhost:3000/api/quizzes';
const QUESTIONS_URL = 'https://wbdv-jingyi-server-node.herokuapp.com/api/questions';

const findQuestionsForQuiz = (qid) => {
  return fetch(`${QUIZZES_URL}/${qid}/questions`)
  .then(response => response.json())
}

const updateQuestion = (questionId, newQuestion) => {
  // return fetch(`http://localhost:3000/api/questions/${questionId}`, {
  //   method: 'PUT',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(newQuestion)
  // }).then(response => response.json())
  return fetch(`${QUESTIONS_URL}/${questionId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newQuestion)
  }).then(response => response.json())
}

const scoreQuiz = (questions) => {
  let numberOfCorrectQuestions = 0
  questions.forEach(question => question.answer === question.correct ?
      numberOfCorrectQuestions++ : numberOfCorrectQuestions)
  return 100 * numberOfCorrectQuestions / questions.length }

const submitQuiz = (quizId, questions) => {

  const quizAttempt = {quiz: quizId, answers: questions, score: scoreQuiz(questions)}
  return new Promise((resolve, reject) => {setTimeout(function() {resolve(quizAttempt)}, 250)})


  // return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
  //   method: 'POST',
  //   body: JSON.stringify(questions),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // }).then(response => response.json())
  // // .then(result => console.log(result))

}



export default {
  findQuestionsForQuiz, submitQuiz, updateQuestion
}

