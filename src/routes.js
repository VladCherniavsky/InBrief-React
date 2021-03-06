import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import App from './containers/App';
import HomePage from './containers/Home/Home';
import CoursesPage from './components/CoursesPage/CoursesPage';
import ManageCoursePage from './components/CoursesPage/ManageCoursePage';
import LoginPage from './containers/LoginPage';
import Links from './containers/Links/Links';

export default (
    <div>
        <Redirect from="/" to="/home" />
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="links" component={Links}/>
            <Route path="home" component={HomePage}/>
            <Route path="course" component={ManageCoursePage}/>
            <Route path="course/:id" component={ManageCoursePage}/>
            <Route path="courses" component={CoursesPage}/>
        </Route>
        <Route path="login" component={LoginPage}/>
    </div>

);
