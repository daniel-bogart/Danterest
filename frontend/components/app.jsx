import React from "react";
import {Redirect, Route, Switch, Link, HashRouter} from "react-router-dom";
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavbarContainer from './navbar/nav_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      {/* <NavbarContainer/> */}
      <Route path="/" component={NavbarContainer}></Route>
    </header>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer}/>
  </div>
);

export default App;

// TODO: Fix UserProfile - replace LoginContainer with user profile container