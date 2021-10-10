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
import PinCreateContainer from "./pins/pin_create_container";
import FooterButton from "./misc/footer_buttons";
import DummySearch from "./navbar/search_bar/dummy_search";

const App = () => (
  <div>
    <Modal />
    <header id="total-header">
      <Route path="/" component={NavbarContainer}></Route>
    </header>
    <Switch>
      <ProtectedRoute path="/search/:searchTag" component={DummySearch} />
      <ProtectedRoute exact path="/users/:userId/boards/:boardId" component={BoardShowContainer} />
      <ProtectedRoute path="/users/pin-builder" component={PinCreateContainer} />
      <Route exact path="/" component={PinIndexContainer}/>
      <ProtectedRoute path="/pins/:pinId" component={PinShowContainer} />
      <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
      <AuthRoute path="/signup" component={SignupContainer}/>
      <AuthRoute path="/login" component={LoginContainer}/>
      <Redirect to="/"/>
    </Switch>
    <footer id="total-footer">
      <ProtectedRoute path="/" component={FooterButton}/>
    </footer>
  </div>
);

export default App;
