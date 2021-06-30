/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Collecte from './Collecte';
import Connexion from './Connexion';
import Enrichir from './Enrichir';
import Home from './Home';
import Search from './Search';
import Validation from './Validation';

const routes = () => {
  <Router>
    <Switch>
      <Route path='/connexion' component={Connexion} />
      <Route path='/collecte' component={Collecte} />
      <Route path='/enrichir' component={Enrichir} />
      <Route path='/validation' component={Validation} />
      <Route path='/recherche' component={Search} />
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>;
};

export default routes;
