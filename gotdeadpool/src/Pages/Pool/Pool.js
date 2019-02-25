import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import characters from "../../Data/characters.json";
import firebase from "../../Utilities/firebase";

class Pool extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: characters,
            show: false,
        };
        // this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);
    };

    // handleClose() {
    //     // Modal close function
    //     this.setState({
    //         show: false,
    //     });
    // };

    // handleShow() {
    //     // Modal show function
    //     this.setState({
    //         show: true
    //     });
    // };

    render() {

        return (
            <Grid>
                <Topper />
                <Row>
                    <Col xs={3}>
                        <Panel>
                            <Panel.Body>
                                {this.props.userID}

                                {this.state.characters.map(characters => (
                                    <div key={characters.id}>
                                        <Button bsStyle="default" style={{ marginBottom: 5 }} onClick={}>
                                            {characters.name}
                                        </Button>
                                    </div>

                                ))}

                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    };
};

export default Pool;

{/* <li key={characters.id}>
                                            {characters.name}
                                           
                                       </li> */}