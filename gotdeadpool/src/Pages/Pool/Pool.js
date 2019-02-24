import React, { Component } from "react";
import Topper from "../../Components/Topper/Topper";
import { Grid, Row, Col, Image, Panel } from 'react-bootstrap';
import characters from "../../Data/characters.json";

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: characters,
        };
    };

    render() {
        return (
            <Grid>
                <Topper />
                <Row>
                    <Col xs={12}>
                        {this.props.userID}
                        {this.state.characters.map(characters => (
                            <Panel key={characters.id}>
                                <Panel.Heading>
                                    {characters.name}
                                </Panel.Heading>
                                <Panel.Body>
                                    <Image style={{ width: 200, height: 300 }} src={characters.image} alt="charpic" />
                                </Panel.Body>
                            </Panel>
                        ))}

                    </Col>
                </Row>
            </Grid>
        );
    };
};

export default Board;