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
                        <h3 className="text-left">Users Registered:</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-right">
                        <h3 className="text-left">Users Participating:</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center">
                        <h3>Pool Prize:</h3>
                        <p>thing money</p>
                    </Col>
                </Row>
            </Grid>
        )
    }

};

export default Persons