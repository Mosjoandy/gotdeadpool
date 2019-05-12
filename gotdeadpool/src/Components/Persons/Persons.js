import React, { Component } from "react";
import { Row, Col, Panel, Button, Modal } from 'react-bootstrap';
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
        // this.addUser = this.addUser.bind(this);
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
            // Set new state of userPool with array of objects
            this.setState({ userPool: newState });
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
        let close = () => this.setState({ show: false });

        return (
            <div>
                <Row>
                    <Col md={3}>

                    </Col>

                    <Col md={6}>
                        <Panel>
                            <Panel.Body>

                                <Col md={12} className="text-center">
                                    <h3>
                                        Confirmed Deaths:
                                 </h3>
                                    <p>
                                        The Night King
                                 </p>
                                    <p>
                                        Theon Greyjoy
                                 </p>
                                    <p>
                                        Ser Jorah
                                 </p>
                                    <p>
                                        Melisandre
                                 </p>
                                    <p>
                                        Beric Dondarrion
                                 </p>
                                    <p>
                                        Missandei
                                 </p>
                                </Col>
                            </Panel.Body>
                        </Panel>
                    </Col>

                    <Col md={3}>
                    </Col>



                </Row>

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
                                    {
                                        this.state.user === "Nicholas Chan" ?

                                            <div>
                                                {/* <Button onClick={this.addUser}>Add Payee/Cash</Button> */}
                                            </div>
                                            :
                                            null
                                    }
                                </Col>
                            </Panel.Body>
                        </Panel>
                    </Col>

                    <Col md={3}>
                    </Col>


                    <Modal
                        size="sm"
                        show={this.state.show}
                        onHide={close}
                        aria-labelledby="modal-userPool"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="modal-userPool">Users In Pool</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ul>
                                {this.state.userPool.map((userPool, index) => (
                                    <li key={index}>{userPool.userName} {}</li>
                                ))}
                            </ul>
                        </Modal.Body>
                    </Modal>
                </Row>
            </div>
        )
    }

};

export default Persons

