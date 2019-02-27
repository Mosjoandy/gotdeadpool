import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import { Grid, Row, Col, Button } from 'react-bootstrap';
// import characters from "../../Data/characters.json";
import characters from "../../Data/charSimple.json";
import Persons from "../../Components/Persons/Persons";
import Form from "../../Components/Form/Form";
// import firebase from "../../Utilities/firebase";

class Pool extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // characters: characters,
            // selection: ["Jon Snow"],
            // show: false,
        };
        // this.sendBack = this.sendBack.bind(this);
        // this.moveOver = this.moveOver.bind(this);
    };

    // sendBack() {
    //     console.log("poop here")
    //     console.log(this.state.selection)
    //     // move character back into original json
    //     // maybe instead of importing json as objects, convert to an array?
    // };

    // moveOver(characters) {
    //     // Sends a selected character to the opposite column to be submitted for the deadpool
    //     // console.log(characters);

    //     var selection = this.state.selection;
    //     for (var i = 0; i < this.state.characters.length; i++) {
    //         console.log(characters[i]);
    //         if (characters === (i + 1)) {
    //             // var match = characters.name
    //             // console.log(match)
    //             // move character match into a new array
    //             // selection.push(match)
    //             // console.log(selection)
    //         };
    //     };
    // };

    render() {

        return (
            <Grid>
                <Form />
                {/* <Topper />
                <Persons />
                <br />
                <Row>
                    <Col xs={6}>

                        {this.props.userID}

                        {
                            this.state.characters.map(characters => (
                                <div key={characters.id}>
                                    <Button bsStyle="default" style={{ marginBottom: 5 }} onClick={() => { this.moveOver(characters) }}>
                                        {characters.name}
                                    </Button>
                                </div>

                            ))}
                    </Col>

                    <Col xs={6} className="text-right">
                        {
                            this.state.selection.map(index => (
                                <div key={index}>
                                    <Button bsStyle="success" style={{ marginBottom: 5 }} onClick={() => { this.sendBack() }}>
                                        {index}
                                    </Button>
                                </div>
                            ))}
                        {this.state.selection}
                    </Col>

                </Row> */}
            </Grid>
        );
    };
};

export default Pool;