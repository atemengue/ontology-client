/** @format */

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Collecte from './components/Collecte';
import Connexion from './components/Connexion';
import Enrichir from './components/Enrichir';
import Home from './components/Home';
import NavComponent from './components/NavComponent';
import Validation from './components/Validation';

const App = (props) => {
  const queryClient = new QueryClient(); // react query client

  return (
    <QueryClientProvider client={queryClient}>
      <NavComponent />
      <Switch>
        <Route path='/connexion' component={Connexion} />
        <Route path='/collecte' component={Collecte} />
        <Route path='/enrichir' component={Enrichir} />
        <Route path='/validation' component={Validation} />
        <Route path='/' component={Home} />
      </Switch>
    </QueryClientProvider>
  );
};

export default App;
