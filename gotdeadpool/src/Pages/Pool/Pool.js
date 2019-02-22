import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from "../../Components/Nav/Nav";

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            poop: "Tada!",
        };
    };

    render() {
        return (
            <Grid>
            <Nav/>
                <Topper />
                <Row>
                    <Col xs={12}>
                        NAmes here
                    </Col>
                </Row>
            </Grid>

        );
    };
};

export default Board;