import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Login from './Components/Forms/Login';
import Register from './Components/Forms/Register';
import Private from './Components/Auth/PrivateRoute';
import Mud from './Game/Mud'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">

      <Header />
      
      <Route exact path='/' component={Login} />

      <Route path='/register' component={Register} />

      <Private path='/mud' component={Mud} />
      
    </div>
  );
}

export default App;
