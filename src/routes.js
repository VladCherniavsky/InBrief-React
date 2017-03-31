import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import CoursesPage from './components/CoursesPage/CoursesPage';
import ManageCoursePage from './components/CoursesPage/ManageCoursePage';
import LoginPage from './components/LoginPage/LoginPage';
import Links from './containers/Links/Links';

export default (
    <div>
        <Redirect from="/" to="/home" />
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="about" component={AboutPage}/>
            <Route path="links" component={Links}/>
            <Route path="home" component={HomePage}/>
            <Route path="course" component={ManageCoursePage}/>
            <Route path="course/:id" component={ManageCoursePage}/>
            <Route path="courses" component={CoursesPage}/>
        </Route>
        <Route path="login" component={LoginPage}/>
    </div>

);
