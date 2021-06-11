import React from "react";
import {Redirect, Route, Switch, Link, HashRouter} from "react-router-dom";
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavbarContainer from './navbar/nav_container';
import Modal from './modal/modal';
import PinIndexContainer from "./pins/pin_index_container";
import PinShowContainer from "./pins/pin_show_container";
import UserProfileContainer from "./user/user_profile_container";
import BoardShowContainer from "./boards/board_show_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <Route path="/" component={NavbarContainer}></Route>
    </header>
    <Switch>
      <ProtectedRoute exact path="/" component={PinIndexContainer}/>
      <ProtectedRoute path="/pins/:pinId" component={PinShowContainer} />
      <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
      <ProtectedRoute path="/users/:userId/:boardId" component={BoardShowContainer} />
      <AuthRoute path="/signup" component={SignupContainer}/>
      <AuthRoute path="/login" component={LoginContainer}/>
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;

// TODO: Fix UserProfile - replace LoginContainer with user profile container