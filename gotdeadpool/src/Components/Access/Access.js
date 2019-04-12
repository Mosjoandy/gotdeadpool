import React, { Component } from "react";
import { Row, Col, Button, Modal, Label } from 'react-bootstrap';
import firebase from "../../Utilities/firebase";

class Access extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userID: props.userID,
            pickCount: 0,
            show: false,
            picks: null,

            jonSnow: false,
            sansaStark: false,
            aryaStark: false,
            branStark: false,
            daenerysTargaryen: false,
            cerseiLannister: false,
            jaimeLannister: false,
            tyrionLannister: false,
            samwellTarly: false,
            gilly: false,
            lordVarys: false,
            sandorClegane: false,
            gregorClegane: false,
            greyWorm: false,
            missandei: false,
            serJorah: false,
            melisandre: false,
            theNightKing: false,
            theonGreyjoy: false,
            yaraGreyjoy: false,
            euronGreyjoy: false,
            tormund: false,
            brienneOfTarth: false,
            serDavosSeaworth: false,
            podrickPayne: false,
            meeraReed: false,
            gendry: false,
            serBronn: false,
            daarioNaharis: false,
            bericDondarrion: false,
        };
        // this.show = this.show.bind(this);
        // this.chosen1 = this.chosen1.bind(this);
        // this.chosen2 = this.chosen2.bind(this);
        // this.unchosen1 = this.unchosen1.bind(this);
        // this.unchose2n = this.unchosen2.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        const picks = firebase.database().ref("pool/" + this.state.userID);

        picks.on('value', (snapshot) => {
            let picks = snapshot.val();

            let newState = [];
            for (let data in picks) {
                newState.push({
                    id: data,
                    jonSnow: picks[data].jonSnow,
                    sansaStark: picks[data].sansaStark,
                    aryaStark: picks[data].aryaStark,
                    branStark: picks[data].branStark,
                    daenerysTargaryen: picks[data].daenerysTargaryen,
                    cerseiLannister: picks[data].cerseiLannister,
                    jaimeLannister: picks[data].jaimeLannister,
                    tyrionLannister: picks[data].tyrionLannister,
                    samwellTarly: picks[data].samwellTarly,
                    gilly: picks[data].gilly,
                    lordVarys: picks[data].lordVarys,
                    sandorClegane: picks[data].sandorClegane,
                    gregorClegane: picks[data].gregorClegane,
                    greyWorm: picks[data].greyWorm,
                    missandei: picks[data].missandei,
                    serJorah: picks[data].serJorah,
                    melisandre: picks[data].melisandre,
                    theNightKing: picks[data].theNightKing,
                    theonGreyjoy: picks[data].theonGreyjoy,
                    yaraGreyjoy: picks[data].yaraGreyjoy,
                    euronGreyjoy: picks[data].euronGreyjoy,
                    tormund: picks[data].tormund,
                    brienneOfTarth: picks[data].brienneOfTarth,
                    serDavosSeaworth: picks[data].serDavosSeaworth,
                    podrickPayne: picks[data].podrickPayne,
                    meeraReed: picks[data].meeraReed,
                    gendry: picks[data].gendry,
                    serBronn: picks[data].serBronn,
                    daarioNaharis: picks[data].daarioNaharis,
                    bericDondarrion: picks[data].bericDondarrion
                });
            };
            console.log(newState)
            this.setState({ picks: newState });
        });
        this.setState({
            show: false
        });
    };

    // show() {
    //     this.setState({
    //         show: true
    //     });
    // };

    // //////////////////////////////////
    // chosen1() {
    //     this.setState({
    //         jonSnow: true
    //     })
    // }
    // chosen2() {
    //     this.setState({
    //         sansaStark: true
    //     })
    // }

    // //////////////////////////////////
    // unchosen1() {
    //     this.setState({
    //         jonSnow: false
    //     })
    // }

    // unchosen2() {
    //     this.setState({
    //         sansaStark: false
    //     })
    // }

    //////////////////////////////////

    render() {
        let close = () => this.setState({ show: false });
        let show = () => this.setState({ show: true });

        let chosen1 = () => this.setState({ jonSnow: true, pickCount: this.state.pickCount+1 });
        let chosen2 = () => this.setState({ sansaStark: true, pickCount: this.state.pickCount+1 });
        let chosen3 = () => this.setState({ aryaStark: true, pickCount: this.state.pickCount+1 });

        let unchosen1 = () => this.setState({ jonSnow: false, pickCount: this.state.pickCount-1 });
        let unchosen2 = () => this.setState({ sansaStark: false, pickCount: this.state.pickCount-1 });
        let unchosen3 = () => this.setState({ aryaStark: false, pickCount: this.state.pickCount-1 });

        return (
            <div>
                <Button bsStyle="default" onClick={show}>Pick your characters</Button>
                <Modal
                    size="sm"
                    show={this.state.show}
                    onHide={close}
                    aria-labelledby="pickCharactersModal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="pickCharactersModal">
                            Characters
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={12} className="text-center">
                                <h4>Instructions:</h4>
                                <div> Choose 10 characters you believe will survive till the end of</div>
                                <h2>EPISODE 5</h2>
                                <hr />
                                <h3>Characters</h3>
                            </Col>
                        </Row>

                        <Row>
                            {this.state.pickCount < 2 ?
                                <Col xs={6} className="text-left">
                                    <p>{this.state.jonSnow === true ? null : <Label className="label-success" onClick={chosen1}>Jon SnowA</Label>}</p>
                                    <p>{this.state.sansaStark === true ? null : <Label className="label-success" onClick={chosen2}>Sansa StarkA</Label>}</p>
                                    <p>{this.state.aryaStark === true ? null : <Label className="label-success" onClick={chosen3}>Arya StarkA</Label>}</p>
                                </Col>
                                :
                                <Col xs={6}>

                                </Col>
                            }

                            <Col xs={6} className="text-right">
                                <p>{this.state.jonSnow === false ? null : <Label className="label-danger" onClick={unchosen1}>Jon SnowD</Label>}</p>
                                <p>{this.state.sansaStark === false ? null : <Label className="label-danger" onClick={unchosen2}>Sansa StarkD</Label>}</p>
                                <p>{this.state.aryaStark === false ? null : <Label className="label-danger" onClick={unchosen3}>Arya StarkD</Label>}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} className="text-center">
                                <Button
                                    type="submit"
                                    value="Submit">
                                    Enter Deadpool
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }

};

export default Access

