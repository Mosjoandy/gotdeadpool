import React from "react";
import { Row, Col, Jumbotron, Image } from 'react-bootstrap';

const Topper = () => (
    <Row>
        <Col xs={12}>
            <Jumbotron className="text-center">
                <Image src={require("../../Data/gotlogo.png")} alt="got" />
                <Image src={require("../../Data/deadpool.png")} alt="dp" />
            </Jumbotron>
        </Col>
    </Row>
)

export default Topper;