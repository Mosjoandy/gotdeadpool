import React, { Component } from 'react';
import { Row, Panel, Col, Button, Tab } from 'react-bootstrap';
import characters from "../../Data/characters.json";
import stark from "../../Data/stark.json";
import lannister from "../../Data/lannister.json";
import targaryen from "../../Data/targaryen.json";
import greyjoy from "../../Data/greyjoy.json";
import tarly from "../../Data/tarly.json";
import free_folk from "../../Data/free_folk.json";
import others from "../../Data/others.json";

class Characters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: characters,
            stark: stark,
            lannister: lannister,
            targaryen: targaryen,
            greyjoy: greyjoy,
            tarly: tarly,
            free_folk: free_folk,
            others: others
        };
    };

    render() {
        let charStyle = {
            height: 60,
            width: 50,
        }

        return (
            <Row>
                <Col xs={12}>
                    <Panel>
                        {/* <Tabs defaultActiveKey="stark" it="charTabs">
                            <Tab eventkey="stark" title="stark">
                                House Stark
                                {this.state.stark.map((stark, index) => (
                                    <div key={index}>
                                        <img style={charStyle} className="img-circle" src={stark.image} alt={stark.stateName} />
                                        <span key={index}>{stark.name}</span>
                                    </div>
                                ))}
                            </Tab>
                        </Tabs> */}


                        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <div className="flex-column">

                                        <Button eventKey="first">Stark</Button>

                                        <Button eventKey="second">Lannister</Button>

                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            House Stark
                                            {this.state.stark.map((stark, index) => (
                                                <div key={index}>
                                                    <img style={charStyle} className="img-circle" src={stark.image} alt={stark.stateName} />
                                                    <span key={index}>{stark.name}</span>
                                                </div>
                                            ))}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            House Lannister
                                            {this.state.lannister.map((lannister, index) => (
                                                <div key={index}>
                                                    <img style={charStyle} className="img-circle" src={lannister.image} alt={lannister.stateName} />
                                                    <p>{lannister.name}</p>
                                                </div>
                                            ))}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container> */}
                    </Panel>
                </Col>


            </Row>
        );
    };

};
export default Characters