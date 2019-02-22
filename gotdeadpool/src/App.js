import React, { Component } from "react";
import "./App.css";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav"
// import { auth, googleProvider } from "./Utilities/firebase"

import Pool from "./Pages/Pool/Pool";

class App extends Component {

  constructor() {
    super();
    this.state = {
      userid: null,
      user: null,
      userExists: false,
    };
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  };

  // logout() {
  //   auth.signOut()
  //     .then(() => {
  //       this.setState({
  //         user: null,
  //         userExists: null
  //       });
  //     });
  // };

  // login() {
  //   auth.signInWithPopup(googleProvider)
  //     .then((result) => {
  //       console.log(result)
  //       // const user = result.user;
  //       // this.setState({
  //       //   user
  //       // });
  //     });
  // };

  render() {
    return (
      <Router>
        <div>      
          <Switch>
            <Route exact path="/" render={() => <Pool />} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
