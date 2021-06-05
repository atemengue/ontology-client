/** @format */

import { Route, Switch } from 'react-router-dom';
import './App.css';
import Enrichir from './components/Enrichir';
import Home from './components/Home';
import NavComponent from './components/NavComponent';
import Validation from './components/Validation';

const App = (props) => {
  return (
    <div>
      <NavComponent />
      <Switch>
        <Route path='/enrichir' component={Enrichir} />
        <Route path='/validation' component={Validation} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
