import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import Home from "./components/home"
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import QuizzesList from "./components/quizzes/quizzes-list";
import {combineReducers, createStore} from "redux";
import quizReducer from "./reducers/quiz-reducer";
import questionReducer from "./reducers/question-reducer";
import {Provider} from "react-redux";
import Quiz from "./components/quizzes/quiz";

const reducers = combineReducers({quizReducer: quizReducer, questionReducer: questionReducer} )

const store = createStore(reducers)


function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact={true}  component={Home}/>
        <Route path="/courses" component={CourseManager}/>
        <Route path={"/courses/:layout/edit"} exact={true} component={() => <h1>Please add the courseId to the path or enter the course editor from course table or course grid.</h1>}/>
        <Route path={[
          // "/courses/:layout/edit",
          "/courses/:layout/edit/:courseId",
          "/courses/:layout/edit/:courseId/modules/:moduleId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
               exact={true}
               render={(props) => <CourseEditor {...props}/>}>
        </Route>
        <Provider store={store}>
          <Route path={"/courses/:courseId/quizzes"} exact={true} component={QuizzesList}/>
          <Route path={"/courses/:courseId/quizzes/:quizId"} exact={true} component={Quiz}/>
        </Provider>


        {/*<Route path="/editor" component={CourseEditor}/>*/}
        {/*<Route path={"/editor"} render={(props) => <CourseEditor {...props}/>}/>*/}
        {/*<div className="zero-margin">*/}
        {/*  <CourseManager/>*/}
        {/*  <CourseEditor/>*/}
        {/*</div>*/}
      </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
