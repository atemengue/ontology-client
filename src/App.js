/** @format */

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddAliment from './components/addAliment';
import AddPlat from './components/addPlat';
import Collecte from './components/Collecte';
import Connexion from './components/Connexion';
import Enrichir from './components/Enrichir';
import Home from './components/Home';
import NavComponent from './components/NavComponent';
import Register from './components/Register';
import Search from './components/Search';
import Validation from './components/Validation';

const App = (props) => {
  const queryClient = new QueryClient(); // react query client

  return (
    <QueryClientProvider client={queryClient}>
      <NavComponent />
      <Switch>
        <Route path='/connexion/compte' component={Register} />
        <Route path='/connexion' component={Connexion} />
        <Route path='/collecte' component={Collecte} />
        <Route path='/enrichir/aliment' component={AddAliment} />
        <Route path='/enrichir/plat' component={AddPlat} />
        <Route path='/enrichir' component={Enrichir} />
        <Route path='/validation' component={Validation} />
        <Route path='/recherche' component={Search} />
        <Route path='/classes/:classNameParam' component={Home} />
        <Route path='/classes/:classNameParam/:individual' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
