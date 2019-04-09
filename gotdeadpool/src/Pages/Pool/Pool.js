import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import {
    Grid,
    Row, Col, Button
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

        };

        this.moveOver = this.moveOver.bind(this);
    };

    moveOver() {
        console.log("UserID: " + this.props.user.uid)
        console.log("UserName: " + this.props.user.displayName)
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
                            {/* <Button bsStyle="default" onClick={this.moveOver}>Clicky Test </Button> */}
                            <Persons user={this.props.user.displayName}/>
                            <Characters />
                        </div>
                }

                <Row>

                </Row>
                {
                    this.props.userExists === false ?
                        null
                        :
                   null
                }
            </Grid>
        );
    };
};

export default Pool;