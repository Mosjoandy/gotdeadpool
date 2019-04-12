import React, { Component } from 'react';
import "./Characters.css";
import { Row, Panel, Col, Label, Button, Modal, Image } from 'react-bootstrap';
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
            others: others,

            showStark: false,
            showLannister: false,
            showTargaryen: false,
            showGreyjoy: false,
            showTarly: false,
            showFree_Folk: false,
            showOthers: false,
            showAll: false,
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
        let closeStark = () => this.setState({ showStark: false });
        let closeLannister = () => this.setState({ showLannister: false });
        let closeTargaryen = () => this.setState({ showTargaryen: false });
        let closeGreyjoy = () => this.setState({ showGreyjoy: false });
        let closeTarly = () => this.setState({ showTarly: false });
        let closeFree_Folk = () => this.setState({ showFree_Folk: false });
        let closeOthers = () => this.setState({ showOthers: false });
        let closeAll = () => this.setState({ showAll: false });

        return (
            <Row>
                <Col xs={12}>
                    <Panel>
                        <Panel.Heading>
                            <h3 className="text-center">Deadpool</h3>
                        </Panel.Heading>
                        <Panel.Body>
                            <Row>
                                <Col xs={12}>
                                    <Button onClick={() => this.setState({ showStark: true })}>House Stark</Button>
                                    <Button onClick={() => this.setState({ showLannister: true })}>House Lannister</Button>
                                    <Button onClick={() => this.setState({ showTargaryen: true })}>House Targaryen</Button>
                                    <Button onClick={() => this.setState({ showGreyjoy: true })}>House Greyjoy</Button>
                                    <Button onClick={() => this.setState({ showTarly: true })}>House Tarly</Button>
                                    <Button onClick={() => this.setState({ showFree_Folk: true })}>House Free Folk</Button>
                                    <Button onClick={() => this.setState({ showOthers: true })}>House Others</Button>
                                    <Button onClick={() => this.setState({ showAll: true })}>House All</Button>
                                </Col>
                            </Row>
                        </Panel.Body>
                        <Modal
                            size="lg"
                            show={this.state.showStark}
                            onHide={closeStark}
                            aria-labelledby="showStark"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showStark">
                                    House Stark
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    {this.state.stark.map((stark, index) => (
                                        <Col sm={6} key={index} id={stark.id}>
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
                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showStark: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            size="lg"
                            show={this.state.showLannister}
                            onHide={closeLannister}
                            aria-labelledby="showLannister"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showLannister">
                                    House Lannister
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    {this.state.lannister.map((lannister, index) => (
                                        <Col sm={6} key={index} id={lannister.id}>
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
                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showLannister: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            size="lg"
                            show={this.state.showTargaryen}
                            onHide={closeTargaryen}
                            aria-labelledby="showTargaryen"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showTargaryen">
                                    House Targaryen
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    {this.state.targaryen.map((targaryen, index) => (
                                        <Col sm={6} key={index} id={targaryen.id}>
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
                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showTargaryen: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            size="lg"
                            show={this.state.showGreyjoy}
                            onHide={closeGreyjoy}
                            aria-labelledby="showGreyjoy"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showGreyjoy">
                                    House Greyjoy
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    {this.state.greyjoy.map((greyjoy, index) => (
                                        <Col sm={6} key={index} id={greyjoy.id}>
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
                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showGreyjoy: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            size="lg"
                            show={this.state.showTarly}
                            onHide={closeTarly}
                            aria-labelledby="showTarly"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showTarly">
                                    House Tarly
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    {this.state.tarly.map((tarly, index) => (
                                        <Col sm={6} key={index} id={tarly.id}>
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
                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showTarly: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            size="lg"
                            show={this.state.showFree_Folk}
                            onHide={closeFree_Folk}
                            aria-labelledby="showFree_Folk"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showFree_Folk">
                                    Free Folk
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    {this.state.free_folk.map((free_folk, index) => (
                                        <Col sm={6} key={index} id={free_folk.id}>
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
                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showFree_Folk: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            size="lg"
                            show={this.state.showOthers}
                            onHide={closeOthers}
                            aria-labelledby="others"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showOthers">
                                    Others
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    {this.state.others.map((others, index) => (
                                        <Col sm={6} key={index} id={others.id}>
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
                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showOthers: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            size="lg"
                            show={this.state.showAll}
                            onHide={closeAll}
                            aria-labelledby="showAll"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="showAll">
                                    All (No Pics)
                                     </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <Panel>
                                            <Panel.Body className="text-center wordWrap">
                                                {this.state.stark.map((stark, index) => (
                                                    <Label className={"label-" + (stark.alive)} key={index}>&nbsp;{stark.name}&nbsp; </Label>
                                                ))}
                                                {this.state.lannister.map((lannister, index) => (
                                                    <Label className={"label-" + (lannister.alive)} key={index}>&nbsp;{lannister.name}&nbsp;</Label>
                                                ))}
                                                {this.state.targaryen.map((targaryen, index) => (
                                                    <Label className={"label-" + (targaryen.alive)} key={index}>&nbsp;{targaryen.name}&nbsp;</Label>
                                                ))}
                                                {this.state.greyjoy.map((greyjoy, index) => (
                                                    <Label className={"label-" + (greyjoy.alive)} key={index}>&nbsp;{greyjoy.name}&nbsp;</Label>
                                                ))}
                                                {this.state.tarly.map((tarly, index) => (
                                                    <Label className={"label-" + (tarly.alive)} key={index}>&nbsp;{tarly.name}&nbsp;</Label>
                                                ))}
                                                {this.state.free_folk.map((free_folk, index) => (
                                                    <Label className={"label-" + (free_folk.alive)} key={index}>&nbsp;{free_folk.name}&nbsp;</Label>
                                                ))}
                                                {this.state.others.map((others, index) => (
                                                    <Label className={"label-" + (others.alive)} key={index}>&nbsp;{others.name}&nbsp;</Label>
                                                ))}

                                            </Panel.Body>
                                        </Panel>
                                    </Col>

                                    <div className="text-center" style={{ marginBottom: 18, position: "sticky", bottom: 20, left: 50, width: 40, height: 40 }}>
                                        <Image src={require("../../Data/x.png")} alt="x" onClick={() => this.setState({ showAll: false })} />
                                    </div>
                                </Row>
                            </Modal.Body>
                        </Modal>
                    </Panel>
                </Col>


            </Row>
        );
    };

};
export default Characters


// <Tabs
// id="controlled-tab-example"
// activeKey={this.state.key}
// onSelect={key => this.setState({ key })}
// className="nav nav-tabs"
// >
// <Tab eventKey="stark" title={"House Stark"}>
//     <Row>
//         {this.state.stark.map((stark, index) => (
//             <Col sm={3} key={index} id={stark.id}>
//                 <Panel style={panelStyle} bsStyle={(stark.alive)}>
//                     <Panel.Heading className="text-center">
//                         {stark.name}
//                     </Panel.Heading>
//                     <Panel.Body>
//                         <img style={charStyle} className="img-rounded" src={stark.image} alt={stark.stateName} />
//                     </Panel.Body>
//                 </Panel>
//             </Col>
//         ))}
//         <div className="text-center" style={{ marginBottom: 18 }}>
//             <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//         </div>
//     </Row>
// </Tab>

// <Tab eventKey="lannister" title="House Lannister">
//     <Row>
//         {this.state.lannister.map((lannister, index) => (
//             <Col sm={3} key={index} id={lannister.id}>
//                 <Panel style={panelStyle} bsStyle={(lannister.alive)}>
//                     <Panel.Heading className="text-center">
//                         {lannister.name}
//                     </Panel.Heading>
//                     <Panel.Body>
//                         <img style={charStyle} className="img-rounded" src={lannister.image} alt={lannister.stateName} />
//                     </Panel.Body>
//                 </Panel>
//             </Col>
//         ))}
//         <div className="text-center" style={{ marginBottom: 18 }}>
//             <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//         </div>
//     </Row>
// </Tab>

// <Tab eventKey="targaryen" title="House Targaryen">
//     <Row>
//         {this.state.targaryen.map((targaryen, index) => (
//             <Col sm={3} key={index} id={targaryen.id}>
//                 <Panel style={panelStyle} bsStyle={(targaryen.alive)}>
//                     <Panel.Heading className="text-center">
//                         {targaryen.name}
//                     </Panel.Heading>
//                     <Panel.Body>
//                         <img style={charStyle} className="img-rounded" src={targaryen.image} alt={targaryen.stateName} />
//                     </Panel.Body>
//                 </Panel>
//             </Col>
//         ))}
//         <div className="text-center" style={{ marginBottom: 18 }}>
//             <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//         </div>
//     </Row>
// </Tab>

// <Tab eventKey="greyjoy" title="House Greyjoy">
//     <Row>
//         {this.state.greyjoy.map((greyjoy, index) => (
//             <Col sm={3} key={index} id={greyjoy.id}>
//                 <Panel style={panelStyle} bsStyle={(greyjoy.alive)}>
//                     <Panel.Heading className="text-center">
//                         {greyjoy.name}
//                     </Panel.Heading>
//                     <Panel.Body>
//                         <img style={charStyle} className="img-rounded" src={greyjoy.image} alt={greyjoy.stateName} />
//                     </Panel.Body>
//                 </Panel>
//             </Col>
//         ))}
//         <div className="text-center" style={{ marginBottom: 18 }}>
//             <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//         </div>
//     </Row>
// </Tab>

// <Tab eventKey="tarly" title="House Tarly">
//     <Row>
//         {this.state.tarly.map((tarly, index) => (
//             <Col sm={3} key={index} id={tarly.id}>
//                 <Panel style={panelStyle} bsStyle={(tarly.alive)}>
//                     <Panel.Heading className="text-center">
//                         {tarly.name}
//                     </Panel.Heading>
//                     <Panel.Body>
//                         <img style={charStyle} className="img-rounded" src={tarly.image} alt={tarly.stateName} />
//                     </Panel.Body>
//                 </Panel>
//             </Col>
//         ))}
//         <div className="text-center" style={{ marginBottom: 18 }}>
//             <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//         </div>
//     </Row>
// </Tab>

// <Tab eventKey="free_folk" title="Free Folk">
//     <Row>
//         {this.state.free_folk.map((free_folk, index) => (
//             <Col sm={3} key={index} id={free_folk.id}>
//                 <Panel style={panelStyle} bsStyle={(free_folk.alive)}>
//                     <Panel.Heading className="text-center">
//                         {free_folk.name}
//                     </Panel.Heading>
//                     <Panel.Body>
//                         <img style={charStyle} className="img-rounded" src={free_folk.image} alt={free_folk.stateName} />
//                     </Panel.Body>
//                 </Panel>
//             </Col>
//         ))}
//         <div className="text-center" style={{ marginBottom: 18 }}>
//             <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//         </div>
//     </Row>
// </Tab>

// <Tab eventKey="others" title="Others">
//     <Row>
//         {this.state.others.map((others, index) => (
//             <Col sm={3} key={index} id={others.id}>
//                 <Panel style={panelStyle} bsStyle={(others.alive)}>
//                     <Panel.Heading className="text-center">
//                         {others.name}
//                     </Panel.Heading>
//                     <Panel.Body>
//                         <img style={charStyle} className="img-rounded" src={others.image} alt={others.stateName} />
//                     </Panel.Body>
//                 </Panel>
//             </Col>
//         ))}
//         <div className="text-center" style={{ marginBottom: 18 }}>
//             <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//         </div>
//     </Row>
// </Tab>

// <Tab eventKey="characters" title="All (No Images)">
//     <Col sm={12}>
//         <Panel>
//             <Panel.Body className="text-center wordWrap">
//                 {this.state.stark.map((stark, index) => (
//                     <Label className={"label-" + (stark.alive) + " pr-1"} key={index}>&nbsp;{stark.name}&nbsp; </Label>
//                 ))}
//                 {this.state.lannister.map((lannister, index) => (
//                     <Label className={"label-" + (lannister.alive)} key={index}>&nbsp;{lannister.name}&nbsp;</Label>
//                 ))}
//                 {this.state.targaryen.map((targaryen, index) => (
//                     <Label className={"label-" + (targaryen.alive)} key={index}>&nbsp;{targaryen.name}&nbsp;</Label>
//                 ))}
//                 {this.state.greyjoy.map((greyjoy, index) => (
//                     <Label className={"label-" + (greyjoy.alive)} key={index}>&nbsp;{greyjoy.name}&nbsp;</Label>
//                 ))}
//                 {this.state.tarly.map((tarly, index) => (
//                     <Label className={"label-" + (tarly.alive)} key={index}>&nbsp;{tarly.name}&nbsp;</Label>
//                 ))}
//                 {this.state.free_folk.map((free_folk, index) => (
//                     <Label className={"label-" + (free_folk.alive)} key={index}>&nbsp;{free_folk.name}&nbsp;</Label>
//                 ))}
//                 {this.state.others.map((others, index) => (
//                     <Label className={"label-" + (others.alive)} key={index}>&nbsp;{others.name}&nbsp;</Label>
//                 ))}

//             </Panel.Body>
//         </Panel>
//     </Col>
//     <div className="text-center" style={{ marginBottom: 18 }}>
//         <Button onClick={() => this.setState({ key: null })}>Hide</Button>
//     </div>
// </Tab>
// </Tabs>