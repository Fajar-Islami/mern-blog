import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainApp from '../pages/MainApp';
import Login from '../pages/Login';
import Regis from '../pages/Regis';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/blogs/login' exact>
          <Login />
        </Route>
        <Route path='/blogs/regis' exact>
          <Regis />
        </Route>
        <Route path='/'>
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
