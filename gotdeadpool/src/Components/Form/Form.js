import React, { Component } from "react";

import { Grid, Row, Col, Button } from 'react-bootstrap';
import characters from "../../Data/characters.json";
// import characters from "../../Data/charSimple.json";
// import firebase from "../../Utilities/firebase";

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: characters,
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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.test = this.test.bind(this);
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    test() {
        console.log('start')
        console.log(this.state.jonSnow)
        console.log(this.state.sansaStark)
        console.log(this.state.aryaStark)
        console.log(this.state.branStark)
        console.log(this.state.daenerysTargaryen)
        console.log(this.state.cerseiLannister)
        console.log(this.state.jaimeLannister)
        console.log(this.state.tyrionLannister)
        console.log(this.state.samwellTarly)
        console.log(this.state.gilly)
        console.log(this.state.lordVarys)
        console.log(this.state.sandorClegane)
        console.log(this.state.gregorClegane)
        console.log(this.state.greyWorm)
        console.log(this.state.missandei)
        console.log(this.state.serJorah)
        console.log(this.state.melisandre)
        console.log(this.state.theNightKing)
        console.log(this.state.theonGreyjoy)
        console.log(this.state.yaraGreyjoy)
        console.log(this.state.euronGreyjoy)
        console.log(this.state.tormund)
        console.log(this.state.brienneOfTarth)
        console.log(this.state.serDavosSeaworth)
        console.log(this.state.podrickPayne)
        console.log(this.state.meeraReed)
        console.log(this.state.gendry)
        console.log(this.state.serBronn)
        console.log(this.state.daarioNaharis)
        console.log(this.state.bericDondarrion)
        console.log('end')
    }
    componentDidUpdate() {
        // console.log(this.state.characters)   
    };


    render() {

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Button onClick={this.test}>Test</Button>
                        <form>
                            {this.state.characters.map(characters => (
                                <div key={characters.id}>
                                    <input
                                        name={characters.stateName}
                                        type="checkbox"
                                        checked={this.state.characters.stateName}
                                        onChange={this.handleInputChange}
                                    />
                                    <label>{characters.name}</label>

                                    <br />
                                </div>
                            ))}
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    };
};

export default Form;