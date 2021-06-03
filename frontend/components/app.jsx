import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import SignupContainer from './sign_up_form/signup_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
    <AuthRoute path="/signup" component={SignupContainer}/>
  </div>
);

export default App;