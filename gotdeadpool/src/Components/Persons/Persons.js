import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import firebase from "../../Utilities/firebase";

class Persons extends Component {

    constructor() {
        super()
        this.state = {
            userPool: [],
        };
    };

    // componentWillMount() {
    //     firebase.database().ref("users/").on("value", function(snapshot) {
    //         var userPool = (snapshot.val())
    //         console.log(userPool)
    //     });
    // }

    componentWillMount() {
        // Access firebase, referencing item userPool
        const userPool = firebase.database().ref("users/");
        // Pull the snapshot from the userPool
        userPool.on('value', (snapshot) => {
            let userPool = snapshot.val();
            // Make a temporary array to push info into
            let newState = [];

            // Run forloop pushing objects into empty array
            for (let data in userPool) {
                newState.push({
                    id: data,
                    userID: userPool[data].userID,
                    userName: userPool[data].userName,
                });
            };
            console.log(newState)
            // Set new state of userPool with array of objects
            this.setState({ userPool: newState });

        });

    };

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <h3 className="text-left">Users Registered:</h3>
                        <ul>
                            {this.state.userPool.map((userPool, index) => (
                                <span key={index}>{userPool.userName}, {}</span>
                            ))}
                        </ul>
                    </Col>
                    <Col md={4} className="text-right">
                        <h3 className="text-left">Users Participating:</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center">
                        <h3>Pool Prize:</h3>
                        <p></p>
                    </Col>
                </Row>
            </Grid>
        )
    }

};

export default Persons