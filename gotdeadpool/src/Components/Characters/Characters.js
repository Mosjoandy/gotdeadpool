import React, { Component } from 'react';
import { Row, Panel, Col, Tabs, Tab, Badge, Button } from 'react-bootstrap';
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
            key: null,
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
            height: 300,
            marginLeft: "auto",
            marginRight: "auto",
        }
        let panelStyle = {
            marginRight: 5,
            marginLeft: 5,
            marginTop: 5,
            marginBotom: 5,
        }

        return (
            <Row>
                <Col xs={12}>
                    <Panel>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={this.state.key}
                            onSelect={key => this.setState({ key })}
                        >
                            <Tab eventKey="stark" title="House Stark">
                                {this.state.stark.map((stark, index) => (
                                    <Col sm={3} key={index} id={stark.id}>
                                        <Panel style={panelStyle} bsStyle={(stark.alive)}>
                                            <Panel.Heading className="text-center">
                                                {stark.name}
                                            </Panel.Heading>
                                            <Panel.Body>
                                                <img style={charStyle} className="img-rounded" src={stark.image} alt={stark.stateName} />
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                ))}
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="lannister" title="House Lannister">
                                {this.state.lannister.map((lannister, index) => (
                                    <Col sm={3} key={index} id={lannister.id}>
                                        <Panel style={panelStyle} bsStyle={(lannister.alive)}>
                                            <Panel.Heading className="text-center">
                                                {lannister.name}
                                            </Panel.Heading>
                                            <Panel.Body>
                                                <img style={charStyle} className="img-rounded" src={lannister.image} alt={lannister.stateName} />
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                ))}
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="targaryen" title="House Targaryen">
                                {this.state.targaryen.map((targaryen, index) => (
                                    <Col sm={3} key={index} id={targaryen.id}>
                                        <Panel style={panelStyle} bsStyle={(targaryen.alive)}>
                                            <Panel.Heading className="text-center">
                                                {targaryen.name}
                                            </Panel.Heading>
                                            <Panel.Body>
                                                <img style={charStyle} className="img-rounded" src={targaryen.image} alt={targaryen.stateName} />
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                ))}
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="greyjoy" title="House Greyjoy">
                                {this.state.greyjoy.map((greyjoy, index) => (
                                    <Col sm={3} key={index} id={greyjoy.id}>
                                        <Panel style={panelStyle} bsStyle={(greyjoy.alive)}>
                                            <Panel.Heading className="text-center">
                                                {greyjoy.name}
                                            </Panel.Heading>
                                            <Panel.Body>
                                                <img style={charStyle} className="img-rounded" src={greyjoy.image} alt={greyjoy.stateName} />
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                ))}
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="tarly" title="House Tarly">
                                {this.state.tarly.map((tarly, index) => (
                                    <Col sm={3} key={index} id={tarly.id}>
                                        <Panel style={panelStyle} bsStyle={(tarly.alive)}>
                                            <Panel.Heading className="text-center">
                                                {tarly.name}
                                            </Panel.Heading>
                                            <Panel.Body>
                                                <img style={charStyle} className="img-rounded" src={tarly.image} alt={tarly.stateName} />
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                ))}
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="free_folk" title="Free Folk">
                                {this.state.free_folk.map((free_folk, index) => (
                                    <Col sm={3} key={index} id={free_folk.id}>
                                        <Panel style={panelStyle} bsStyle={(free_folk.alive)}>
                                            <Panel.Heading className="text-center">
                                                {free_folk.name}
                                            </Panel.Heading>
                                            <Panel.Body>
                                                <img style={charStyle} className="img-rounded" src={free_folk.image} alt={free_folk.stateName} />
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                ))}
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="others" title="Others">
                                {this.state.others.map((others, index) => (
                                    <Col sm={3} key={index} id={others.id}>
                                        <Panel style={panelStyle} bsStyle={(others.alive)}>
                                            <Panel.Heading className="text-center">
                                                {others.name}
                                            </Panel.Heading>
                                            <Panel.Body>
                                                <img style={charStyle} className="img-rounded" src={others.image} alt={others.stateName} />
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                ))}
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="characters" title="All (No Images)">
                                <Col sm={12}>
                                    <Panel>
                                        <Panel.Body className="text-center">
                                            {this.state.characters.map((characters, index) => (
                                                <Badge variant={(characters.alive)} key={index}>{characters.name}&nbsp;</Badge>
                                            ))}
                                        </Panel.Body>
                                    </Panel>
                                </Col>
                                <div className="text-center" style={{ marginBottom: 18 }}>
                                    <Button onClick={() => this.setState({ key: null })}>Hide</Button>
                                </div>
                            </Tab>
                        </Tabs>
                    </Panel>
                </Col>


            </Row>
        );
    };

};
export default Characters