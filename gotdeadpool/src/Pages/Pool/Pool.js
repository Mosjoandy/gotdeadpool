import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import {
    Grid,
    Row, Button, Col
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
        };

        this.joinPool = this.joinPool.bind(this);
    };

    componentWillMount() {

    }


    joinPool() {
        firebase.database().ref("pool/" + this.props.user.uid).set({
            userName: this.props.user.displayName,
            paid: false,
            picks: "None",
        });
    };

    render() {

        return (
            <Grid>
                {/* <Form /> */}

                {
                    this.props.userExists === false ?
                        <div>
                            <p>Not logged in sry bro</p>
                            <Topper />
                        </div>
                        :
                        <div>

                            <Persons user={this.props.user.displayName} />
                            <Characters />
                        </div>
                }

                <Row>

                </Row>
                {
                    this.props.userExists === false ?
                        null
                        :
                        <Col md={12} className="text-center">
                            <Button bsStyle="default" onClick={this.joinPool}>Join Pool</Button>
                        </Col>
                }
            </Grid>
        );
    };
};

export default Pool;