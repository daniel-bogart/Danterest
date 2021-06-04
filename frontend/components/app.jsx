import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavbarContainer from './navbar/nav_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer/>
    </header>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer}/>
    {/* <AuthRoute path="/UserProfile" component={LoginContainer}/>  */}
  </div>
);

export default App;

// TODO: Fix UserProfile - replace LoginContainer with user profile container