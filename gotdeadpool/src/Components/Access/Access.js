import React, { Component } from "react";
import { Grid, Row, Col, Panel, Button, Modal } from 'react-bootstrap';
import firebase from "../../Utilities/firebase";

class Access extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userPool: [],
            userCount: null,
            prizePool: null,
            show: false,
            user: props.user
        };
        this.addUser = this.addUser.bind(this);
    };

    componentWillMount() {
        // Access firebase, referencing item userPool
        const userPool = firebase.database().ref("pool/");
        // Pull the snapshot from the userPool
        userPool.on('value', (snapshot) => {
            let userPool = snapshot.val();
            // Make a temporary array to push info into
            let newState = [];

            // Run forloop pushing objects into empty array
            for (let data in userPool) {
                newState.push({
                    id: data,
                    // userID: userPool[data].userID,
                    userName: userPool[data].userName,
                });
            };
            console.log(newState)
            // Set new state of userPool with array of objects
            this.setState({ userPool: newState });
            console.log(this.state.user)
        });
        var that = this

        firebase.database().ref("paidUserCount/").on("value", function (snapshot) {
            that.setState({ userCount: snapshot.val().userCount });
        });

        firebase.database().ref("prizePool/").on("value", function (snapshot) {
            that.setState({ prizePool: snapshot.val().prizePool });
        });
    };


    render() {

        return (
           <div></div>
        )
    }

};

export default Access

