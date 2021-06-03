import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer}/>
  </div>
);

export default App;