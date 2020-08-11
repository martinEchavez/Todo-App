import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Dashboard from './Components/Todos/Dashboard';

const App = () => {

  return (
    <Router>
      {/* Navegación */}
      <Navbar />
      {/* Componentes por URL */}
      <Route path="/" exact component={Dashboard} />
    </Router>
  );
};

export default App;
