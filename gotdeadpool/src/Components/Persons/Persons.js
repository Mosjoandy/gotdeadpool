import React, { Component } from "react";
import { Grid, Row, Col, Panel, Button, Modal } from 'react-bootstrap';
import firebase from "../../Utilities/firebase";

class Persons extends Component {

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

    addUser() {
        var counter = (this.state.userCount + 1);
        this.setState({ userCount: counter });
        firebase.database().ref("paidUserCount/").set({
            userCount: counter
        });

        var cash = (this.state.prizePool + 10);
        this.setState({ prizePool: cash });
        firebase.database().ref("prizePool/").set({
            prizePool: cash
        });
    };

    render() {
        let close = () => this.setState({ show: false });

        return (
            <Grid>
                <Row>
                    <Col md={3}>
                    </Col>

                    <Col md={6}>
                        <Panel>
                            <Panel.Body>
                                <Col md={6} className="text-center">
                                    <h3>Users in Pool: {this.state.userCount}</h3>
                                    <Button onClick={() => this.setState({ show: true })}>Show Users</Button>
                                </Col>

                                <Col md={6} className="text-center">
                                    <h3>Pool Prize: ${this.state.prizePool}</h3>
                                    <h4>{this.state.user}</h4>
                                    {this.state.user === "Nicholas Chan" ?
                                        <Button onClick={this.addUser}>Add Payee/Cash</Button>
                                        :
                                        null
                                    }
                                </Col>
                            </Panel.Body>
                        </Panel>
                    </Col>

                    <Col md={3}>
                    </Col>
                </Row>

                <Modal
                    size="sm"
                    show={this.state.show}
                    onHide={close}
                    aria-labelledby="modal-userPool"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-userPool">Paid Users</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {this.state.userPool.map((userPool, index) => (
                                <li key={index}>{userPool.userName} {}</li>
                            ))}
                        </ul>
                    </Modal.Body>
                </Modal>
            </Grid>
        )
    }

};

export default Persons

