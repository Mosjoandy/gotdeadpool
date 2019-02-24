import React, { Component } from "react";
import "./App.css";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import { auth, googleProvider } from "./Utilities/firebase"

import Pool from "./Pages/Pool/Pool";

class App extends Component {

  constructor() {
    super();
    this.state = {
      userID: null,
      userName: null,
      userExists: false,
      userPhoto: ""
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  };

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
          userExists: null
        });
      });
  };

  login() {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        this.setState({
          userExists: true,
          userName: result.user.displayName,
          userID: result.user.uid,
          userPhoto: result.user.photoURL
        });
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Nav
            userName={this.state.userName}
            userID={this.state.userID}
            userPhoto={this.state.photoURL}
          >
            {
              this.state.userExists === true ?
                <div style={{ display: "inline-block", width: 200 }}>
                  <p style={{float:"right"}}>Signed in as: {this.state.userName}</p>
                  <Button style={{float:"right"}} onClick={this.logout}>Logout</Button>
                </div>
                :
                <div style={{ display: "inline-block", width: 200 }}>
                  <p style={{float:"right"}}> Please sign in for access</p>
                  <Button style={{float:"right"}} onClick={this.login}>Login</Button>
                </div>
            }
          </Nav>
          <Switch>
            <Route exact path="/" render={(props) => <Pool userID={this.state.userID} />} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
