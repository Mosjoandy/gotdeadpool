import React, { Component } from "react";
import "./App.css";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, googleProvider } from "./Utilities/firebase"
import firebase from "./Utilities/firebase";

import Pool from "./Pages/Pool/Pool";
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      user: null,
      userExists: false,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  };

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
          userExists: false
        });
      });
  };

  login() {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user,
          userExists: true,
        });
        firebase.database().ref("users/" + result.user.uid).set({
          userID: result.user.uid,
          userName: result.user.displayName
        });
        // console.log(result.user.uid)
        // console.log(result.user.displayName)
        // console.log(this.state.userExists)
        // console.log(result.user)
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Nav>
            {
              this.state.userExists === true ?
                <Button onClick={this.logout}>Logout</Button>
                :
                <Button onClick={this.login}>Login</Button>
            }
          </Nav>

          <Switch>
            <Route exact path="/" render={() => <Pool userExists={this.state.userExists} user={this.state.user} />} />
          </Switch>
          <Footer />
        </div>

      </Router>
    );
  };
};

export default App;
