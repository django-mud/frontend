import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Route exact path='/' component={Login} />

      <Route path='/register' component={Register} />
      
    </div>
  );
}

export default App;
