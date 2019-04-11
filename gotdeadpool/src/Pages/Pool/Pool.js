import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import {
    Grid,
    Row, Button, Col, Modal, Image
} from 'react-bootstrap';
import Characters from "../../Components/Characters/Characters";
import Persons from "../../Components/Persons/Persons";
// import Form from "../../Components/Form/Form";
import firebase from "../../Utilities/firebase";

class Pool extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            userExists: props.userExists,
            paid: null,
            accessButton: "show",
            show: false,
        };
        this.requestAccess = this.requestAccess.bind(this);
    };

    componentWillReceiveProps(props) {
        firebase.database().ref("pool/" + props.user.uid).on("value", function (snapshot) {
            try {
                console.log(snapshot.val())
            } catch (err) {
                console.log(err);
            }
        });
    };

    requestAccess() {
        firebase.database().ref("pool/" + this.props.user.uid).set({
            userName: this.props.user.displayName,
            userID: this.props.user.uid,
            access: true,
            paid: false,
            picks: "None",
        });
        this.setState({
            accessButton: "hide",
            show: true,
        });
    };

    render() {
        let close = () => this.setState({ show: false });

        return (
            <Grid>
                {/* <Form /> */}

                {
                    this.props.userExists === false ?
                        <div>
                            <Topper />
                        </div>
                        :
                        <div>

                            <Persons user={this.props.user.displayName} />
                            <Characters />
                        </div>
                }

                {
                    this.props.userExists === false ?
                        null
                        :
                        <div>
                            {
                                this.props.user.displayName === "Nicholas Chan" ?
                                    <p>Approval of people's stuff</p>
                                    :
                                    <Row>
                                        <Col md={12} className="text-center">
                                            <Button bsStyle="default" onClick={this.requestAccess}>Request to join</Button>
                                        </Col>
                                    </Row>
                            }

                        </div>
                }
                <Modal
                    size="sm"
                    show={this.state.show}
                    onHide={close}
                    aria-labelledby="requestAccessModal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="requestAccessModal">
                            Request Sent
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            <h2>Your request has been sent</h2>
                            <h3>Send your wager to Nicholas Chan</h3>
                            <hr />
                            <p>Want to make this faster? You can venmo @Nicholas-Chan</p>
                            <p>In the comment field, put in your Name and mention the deadpool</p>
                            <Image style={{ marginRight: "auto", marginLeft: "auto", height: 125, width: 125 }} src={require("../../Data/qr.png")} alt="venmo" />
                        </div>
                    </Modal.Body>
                </Modal>

            </Grid>
        );
    };
};

export default Pool;