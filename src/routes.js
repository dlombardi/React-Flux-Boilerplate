'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import homePage from './components/homePage';
import aboutPage from './components/about/aboutPage';
import authorPage from './components/authors/authorPage';
import NotFoundRoute from './components/common/NotFoundRoute';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={homePage}/>
      <Route path="authors" component={authorPage}/>
      <Route path="about" component={aboutPage}/>
      <Route path="*" component={NotFoundRoute}/>
      <Redirect from="about-us" to="about"/>
    </Route>
  </Router>
)

export default routes
