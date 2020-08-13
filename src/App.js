import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Todos from './Components/Todos';
import Home from './Components/Home';
import Finanzas from './Components/Finanzas';

const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/finanzas" component={Finanzas} />
          <Redirect to="/" />{/**Si no encuentra la ruta redirecciona al home*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
