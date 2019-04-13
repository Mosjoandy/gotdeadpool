import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import {
    Grid,
    Row, Button, Col, Modal, Image
} from 'react-bootstrap';
import Characters from "../../Components/Characters/Characters";
import Persons from "../../Components/Persons/Persons";
import Access from "../../Components/Access/Access";
import firebase from "../../Utilities/firebase";

class Pool extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            userExists: props.userExists,
            paid: null,
            picks: null,
            accessButton: "show",
            show: false,
        };
        this.requestAccess = this.requestAccess.bind(this);
    };

    componentWillReceiveProps(props) {
        var that = this;
        firebase.database().ref("pool/" + props.user.uid).on("value", function (snapshot) {
            try {
                that.setState({
                    paid: snapshot.val().paid,
                    picks: snapshot.val().picks
                })
            } catch (err) {
                console.log(err);
            };
        });
    };

    requestAccess() {
        firebase.database().ref("pool/" + this.props.user.uid).set({
            userName: this.props.user.displayName,
            userID: this.props.user.uid,
            access: true,
            paid: false,
            picks: [],
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
                                this.state.paid === true ?
                                    <div>
                                        {
                                            this.state.inPool === false ?
                                                <p>firebase show user picks</p>
                                                :
                                                <div className="text-center">
                                                    <Access user={this.props.user.uid} />
                                                    <p>Pick your characters</p>
                                                </div>

                                        }

                                    </div>
                                    :
                                    <Row>
                                        <Col md={12} className="text-center">
                                            <Button style={{ marginRight: "auto", marginLeft: "auto" }} bsStyle="default" onClick={this.requestAccess}>Request to join</Button>
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