/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Enrichir from './Enrichir';
import Home from './Home';
import Validation from './Validation';

const routes = () => {
  <Router>
    <Switch>
      <Route path='/enrichir' component={Enrichir} />
      <Route path='/validation' component={Validation} />
      <Route path='/' component={Home} />
    </Switch>
  </Router>;
};

export default routes;
