import React from 'react';
import "./Footer.css";
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => (
    <div id="footer" className="text-center bg-light">
        <Grid>
            <Row>
                <Col xs={12}>

                    © 2019 Nicholas Chan

                </Col>
            </Row>
        </Grid>
    </div>
);

export default Footer