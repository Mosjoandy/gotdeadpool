import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';

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
                    <Col md={4}>

                    </Col>
                    <Col md={4}>

                    </Col>

                </Row>
            </Grid>
        )
    }

};

export default Persons