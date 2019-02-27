import React, { Component } from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Persons extends Component {

    constructor() {
        super()
        this.state = {
            yup: "1",
        };

    };

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <h3>Users in Pool:</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center">
                        <h3>Pool Prize:</h3>
                        <p>thing money</p>
                    </Col>
                    <Col md={4} className="text-right">
                        <Button bsStyle="primary">Join Pool</Button>
                    </Col>

                </Row>
            </Grid>
        )
    }

};

export default Persons