import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Login from './Forms/Login';
import Register from './Forms/Register'

function App() {
  return (
    <div className="App">
      
      <Route exact path='/' component={Login} />

      <Route path='/register' component={Register} />
      
    </div>
  );
}

export default App;
