import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import firebase from './config/firebase';

import { UserContext } from './context';

import Landing from "./components/landing";
import EventDetail from "./components/event";
import ConfirmRegister from "./components/event/confirm";
import JoinSuccess from "./components/event/success";
import Login from "./components/login";
import NotFound from "./components/error/NotFound";

import Navbar from "./components/base/navbar";
import Register from "./components/login/register";

class App extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      console.log(user)
    });
  }

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ user: {} });
  }

  render() {
    const { user } = this.state
    return (
      <UserContext.Provider value={{ user }}>
        <Navbar logout={this.logout} />
        <Switch>
          {user && <Route exact path="/login" component={Login} />}
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/event/success" component={JoinSuccess} />
          <Route exact path="/event/:uid" component={EventDetail} />
          <Route exact path="/event/:uid/confirm" component={ConfirmRegister} />
          <Route component={NotFound} />
        </Switch>
      </UserContext.Provider>
    );
  }
}

export default withRouter(App);
