import React, { Component } from "react";
import { Row, Col, Button, Modal, Label, Image, Panel } from 'react-bootstrap';
import firebase from "../../Utilities/firebase";

class Access extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            pickCount: 10,
            show: false,
            yourShow: false,
            picks: props.picks,
            submitted: false,
            inPool: props.inPool,

            userCount: null,
            prizePool: null,

            picksArray: [],

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
            bericDondarrion: false

        };
        this.submit = this.submit.bind(this);
        this.showPicks = this.showPicks.bind(this);
    };

    componentWillMount() {
        var that = this
        firebase.database().ref("paidUserCount/").on("value", function (snapshot) {
            that.setState({ userCount: snapshot.val().userCount });
        });

        firebase.database().ref("prizePool/").on("value", function (snapshot) {
            that.setState({ prizePool: snapshot.val().prizePool });
        });
    }

    showPicks() {
        if (this.props.picks.jonSnow === true) {
            this.state.picksArray.push("Jon Snow")
        }
        if (this.props.picks.aryaStark === true) {
            this.state.picksArray.push("Arya Stark")
        }
        if (this.props.picks.sansaStark === true) {
            this.state.picksArray.push("Sansa Stark")
        }
        if (this.props.picks.branStark === true) {
            this.state.picksArray.push("Bran Stark")
        }
        if (this.props.picks.daenerysTargaryen === true) {
            this.state.picksArray.push("Daenerys Targaryen")
        }
        if (this.props.picks.cerseiLannister === true) {
            this.state.picksArray.push("Cersei Lannister")
        }
        if (this.props.picks.jaimeLannister === true) {
            this.state.picksArray.push("Jaime Lannister")
        }
        if (this.props.picks.tyrionLannister === true) {
            this.state.picksArray.push("Tyrion Lannister")
        }
        if (this.props.picks.samwellTarly === true) {
            this.state.picksArray.push("Samwell Tarly")
        }
        if (this.props.picks.gilly === true) {
            this.state.picksArray.push("Gilly")
        }
        if (this.props.picks.lordVarys === true) {
            this.state.picksArray.push("Lord Varys")
        }
        if (this.props.picks.sandorClegane === true) {
            this.state.picksArray.push("Sandor Clegane")
        }
        if (this.props.picks.gregorClegane === true) {
            this.state.picksArray.push("Gregor Clegane")
        }
        if (this.props.picks.greyWorm === true) {
            this.state.picksArray.push("Grey Worm")
        }
        if (this.props.picks.missandei === true) {
            this.state.picksArray.push("Missandei")
        }
        if (this.props.picks.serJorah === true) {
            this.state.picksArray.push("Ser Jorah")
        }
        if (this.props.picks.melisandre === true) {
            this.state.picksArray.push("Melisandre")
        }
        if (this.props.picks.theNightKing === true) {
            this.state.picksArray.push("The Night King")
        }
        if (this.props.picks.theonGreyjoy === true) {
            this.state.picksArray.push("Theon Greyjoy")
        }
        if (this.props.picks.yaraGreyjoy === true) {
            this.state.picksArray.push("Yara Greyjoy")
        }
        if (this.props.picks.euronGreyjoy === true) {
            this.state.picksArray.push("Euron Greyjoy")
        }
        if (this.props.picks.tormund === true) {
            this.state.picksArray.push("Tormund")
        }
        if (this.props.picks.brienneOfTarth === true) {
            this.state.picksArray.push("Brienne of Tarth")
        }
        if (this.props.picks.serDavosSeaworth === true) {
            this.state.picksArray.push("Ser Davos Seaworth")
        }
        if (this.props.picks.podrickPayne === true) {
            this.state.picksArray.push("Podrick Payne")
        }
        if (this.props.picks.meeraReed === true) {
            this.state.picksArray.push("Meera Reed")
        }
        if (this.props.picks.gendry === true) {
            this.state.picksArray.push("Gendry")
        }
        if (this.props.picks.serBronn === true) {
            this.state.picksArray.push("Ser Bronn")
        }
        if (this.props.picks.daarioNaharis === true) {
            this.state.picksArray.push("Daario Naharis")
        }
        if (this.props.picks.bericDondarrion === true) {
            this.state.picksArray.push("Beric Dondarrion")
        }
        this.setState({ yourShow: true })
    }

    submit() {
        firebase.database().ref("pool/" + this.state.user + "/inPool/").set({
            inPool: true
        });
        // console.log(this.state.inPool)
        firebase.database().ref("pool/" + this.state.user + "/picks/").set({
            jonSnow: this.state.jonSnow,
            sansaStark: this.state.sansaStark,
            aryaStark: this.state.aryaStark,
            branStark: this.state.branStark,
            daenerysTargaryen: this.state.daenerysTargaryen,
            cerseiLannister: this.state.cerseiLannister,
            jaimeLannister: this.state.jaimeLannister,
            tyrionLannister: this.state.tyrionLannister,
            samwellTarly: this.state.samwellTarly,
            gilly: this.state.gilly,
            lordVarys: this.state.lordVarys,
            sandorClegane: this.state.sandorClegane,
            gregorClegane: this.state.gregorClegane,
            greyWorm: this.state.greyWorm,
            missandei: this.state.missandei,
            serJorah: this.state.serJorah,
            melisandre: this.state.melisandre,
            theNightKing: this.state.theNightKing,
            theonGreyjoy: this.state.theonGreyjoy,
            yaraGreyjoy: this.state.yaraGreyjoy,
            euronGreyjoy: this.state.euronGreyjoy,
            tormund: this.state.tormund,
            brienneOfTarth: this.state.brienneOfTarth,
            serDavosSeaworth: this.state.serDavosSeaworth,
            podrickPayne: this.state.podrickPayne,
            meeraReed: this.state.meeraReed,
            gendry: this.state.gendry,
            serBronn: this.state.serBronn,
            daarioNaharis: this.state.daarioNaharis,
            bericDondarrion: this.state.bericDondarrion
        });

        var counter = (this.state.userCount + 1);
        this.setState({ userCount: counter });
        firebase.database().ref("paidUserCount/").set({
            userCount: counter
        });

        var cash = (this.state.prizePool + 10);
        this.setState({ prizePool: cash });
        firebase.database().ref("prizePool/").set({
            prizePool: cash
        });

        this.setState({
            submitted: true,
            inPool: true,
        });
        setTimeout(() => {
            this.setState({
                show: false,
            });
        }, 2000);
    };

    render() {
        let close = () => this.setState({ show: false });
        let show = () => this.setState({ show: true });
        const YourDP = () => (
            <div>
                {this.state.picksArray.map(picks => <span key={picks}>{picks}<br /></span>)}
            </div>
        )

        let chosen1 = () => this.setState({ jonSnow: true, pickCount: this.state.pickCount - 1 });
        let chosen2 = () => this.setState({ sansaStark: true, pickCount: this.state.pickCount - 1 });
        let chosen3 = () => this.setState({ aryaStark: true, pickCount: this.state.pickCount - 1 });
        let chosen4 = () => this.setState({ branStark: true, pickCount: this.state.pickCount - 1 });
        let chosen5 = () => this.setState({ daenerysTargaryen: true, pickCount: this.state.pickCount - 1 });
        let chosen6 = () => this.setState({ cerseiLannister: true, pickCount: this.state.pickCount - 1 });
        let chosen7 = () => this.setState({ jaimeLannister: true, pickCount: this.state.pickCount - 1 });
        let chosen8 = () => this.setState({ tyrionLannister: true, pickCount: this.state.pickCount - 1 });
        let chosen9 = () => this.setState({ samwellTarly: true, pickCount: this.state.pickCount - 1 });
        let chosen10 = () => this.setState({ gilly: true, pickCount: this.state.pickCount - 1 });
        let chosen11 = () => this.setState({ lordVarys: true, pickCount: this.state.pickCount - 1 });
        let chosen12 = () => this.setState({ sandorClegane: true, pickCount: this.state.pickCount - 1 });
        let chosen13 = () => this.setState({ gregorClegane: true, pickCount: this.state.pickCount - 1 });
        let chosen14 = () => this.setState({ greyWorm: true, pickCount: this.state.pickCount - 1 });
        let chosen15 = () => this.setState({ missandei: true, pickCount: this.state.pickCount - 1 });
        let chosen16 = () => this.setState({ serJorah: true, pickCount: this.state.pickCount - 1 });
        let chosen17 = () => this.setState({ melisandre: true, pickCount: this.state.pickCount - 1 });
        let chosen18 = () => this.setState({ theNightKing: true, pickCount: this.state.pickCount - 1 });
        let chosen19 = () => this.setState({ theonGreyjoy: true, pickCount: this.state.pickCount - 1 });
        let chosen20 = () => this.setState({ yaraGreyjoy: true, pickCount: this.state.pickCount - 1 });
        let chosen21 = () => this.setState({ euronGreyjoy: true, pickCount: this.state.pickCount - 1 });
        let chosen22 = () => this.setState({ tormund: true, pickCount: this.state.pickCount - 1 });
        let chosen23 = () => this.setState({ brienneOfTarth: true, pickCount: this.state.pickCount - 1 });
        let chosen24 = () => this.setState({ serDavosSeaworth: true, pickCount: this.state.pickCount - 1 });
        let chosen25 = () => this.setState({ podrickPayne: true, pickCount: this.state.pickCount - 1 });
        let chosen26 = () => this.setState({ meeraReed: true, pickCount: this.state.pickCount - 1 });
        let chosen27 = () => this.setState({ gendry: true, pickCount: this.state.pickCount - 1 });
        let chosen28 = () => this.setState({ serBronn: true, pickCount: this.state.pickCount - 1 });
        let chosen29 = () => this.setState({ daarioNaharis: true, pickCount: this.state.pickCount - 1 });
        let chosen30 = () => this.setState({ bericDondarrion: true, pickCount: this.state.pickCount - 1 });

        let unchosen1 = () => this.setState({ jonSnow: false, pickCount: this.state.pickCount + 1 });
        let unchosen2 = () => this.setState({ sansaStark: false, pickCount: this.state.pickCount + 1 });
        let unchosen3 = () => this.setState({ aryaStark: false, pickCount: this.state.pickCount + 1 });
        let unchosen4 = () => this.setState({ branStark: false, pickCount: this.state.pickCount + 1 });
        let unchosen5 = () => this.setState({ daenerysTargaryen: false, pickCount: this.state.pickCount + 1 });
        let unchosen6 = () => this.setState({ cerseiLannister: false, pickCount: this.state.pickCount + 1 });
        let unchosen7 = () => this.setState({ jaimeLannister: false, pickCount: this.state.pickCount + 1 });
        let unchosen8 = () => this.setState({ tyrionLannister: false, pickCount: this.state.pickCount + 1 });
        let unchosen9 = () => this.setState({ samwellTarly: false, pickCount: this.state.pickCount + 1 });
        let unchosen10 = () => this.setState({ gilly: false, pickCount: this.state.pickCount + 1 });
        let unchosen11 = () => this.setState({ lordVarys: false, pickCount: this.state.pickCount + 1 });
        let unchosen12 = () => this.setState({ sandorClegane: false, pickCount: this.state.pickCount + 1 });
        let unchosen13 = () => this.setState({ gregorClegane: false, pickCount: this.state.pickCount + 1 });
        let unchosen14 = () => this.setState({ greyWorm: false, pickCount: this.state.pickCount + 1 });
        let unchosen15 = () => this.setState({ missandei: false, pickCount: this.state.pickCount + 1 });
        let unchosen16 = () => this.setState({ serJorah: false, pickCount: this.state.pickCount + 1 });
        let unchosen17 = () => this.setState({ melisandre: false, pickCount: this.state.pickCount + 1 });
        let unchosen18 = () => this.setState({ theNightKing: false, pickCount: this.state.pickCount + 1 });
        let unchosen19 = () => this.setState({ theonGreyjoy: false, pickCount: this.state.pickCount + 1 });
        let unchosen20 = () => this.setState({ yaraGreyjoy: false, pickCount: this.state.pickCount + 1 });
        let unchosen21 = () => this.setState({ euronGreyjoy: false, pickCount: this.state.pickCount + 1 });
        let unchosen22 = () => this.setState({ tormund: false, pickCount: this.state.pickCount + 1 });
        let unchosen23 = () => this.setState({ brienneOfTarth: false, pickCount: this.state.pickCount + 1 });
        let unchosen24 = () => this.setState({ serDavosSeaworth: false, pickCount: this.state.pickCount + 1 });
        let unchosen25 = () => this.setState({ podrickPayne: false, pickCount: this.state.pickCount + 1 });
        let unchosen26 = () => this.setState({ meeraReed: false, pickCount: this.state.pickCount + 1 });
        let unchosen27 = () => this.setState({ gendry: false, pickCount: this.state.pickCount + 1 });
        let unchosen28 = () => this.setState({ serBronn: false, pickCount: this.state.pickCount + 1 });
        let unchosen29 = () => this.setState({ daarioNaharis: false, pickCount: this.state.pickCount + 1 });
        let unchosen30 = () => this.setState({ bericDondarrion: false, pickCount: this.state.pickCount + 1 });

        return (
            <Row>
                <Col xs={12}>
                    <Panel>
                        <Panel.Heading>
                            <h3 className="text-center">Your Deadpool</h3>
                        </Panel.Heading>
                        <Panel.Body>
                            {
                                this.state.inPool === false ?
                                    <div className="text-center">
                                        <Button bsStyle="default" onClick={show}>Pick your pool</Button>

                                    </div>
                                    :
                                    <div className="text-center">
                                        {
                                            this.state.yourShow === false ?

                                                <Button onClick={this.showPicks}>Show my pool</Button>
                                                :
                                                <div>
                                                    <Col xs={2}>

                                                    </Col>
                                                    <Col xs={8}>
                                                        <Row>
                                                            <Col xs={12}>

                                                                <YourDP />


                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={2}>

                                                    </Col>
                                                </div>
                                        }
                                    </div>
                            }
                            {/* <Button bsStyle="default" onClick={show}>Pick your pool</Button> */}

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
                                            <div>Choose 10 characters you believe will survive till the end of the season</div>
                                            <hr />
                                            <h3>Characters</h3>
                                        </Col>
                                    </Row>

                                    <Row>

                                        {
                                            this.state.pickCount > 0 ?
                                                <Col xs={6} className="text-left">
                                                    {this.state.jonSnow === true ? null : <Label className="label-success" onClick={chosen1}>Jon Snow</Label>}<br />
                                                    {this.state.sansaStark === true ? null : <Label className="label-success" onClick={chosen2}>Sansa Stark</Label>}<br />
                                                    {this.state.aryaStark === true ? null : <Label className="label-success" onClick={chosen3}>Arya Stark</Label>}<br />
                                                    {this.state.branStark === true ? null : <Label className="label-success" onClick={chosen4}>Bran Stark</Label>}<br />
                                                    {this.state.daenerysTargaryen === true ? null : <Label className="label-success" onClick={chosen5}>Daenerys Targaryen</Label>}<br />
                                                    {this.state.cerseiLannister === true ? null : <Label className="label-success" onClick={chosen6}>Cersei Lannister</Label>}<br />
                                                    {this.state.jaimeLannister === true ? null : <Label className="label-success" onClick={chosen7}>Jaime Lannister</Label>}<br />
                                                    {this.state.tyrionLannister === true ? null : <Label className="label-success" onClick={chosen8}>Tyrion Lannister</Label>}<br />
                                                    {this.state.samwellTarly === true ? null : <Label className="label-success" onClick={chosen9}>Samwell Tarly</Label>}<br />
                                                    {this.state.gilly === true ? null : <Label className="label-success" onClick={chosen10}>Gilly</Label>}<br />
                                                    {this.state.lordVarys === true ? null : <Label className="label-success" onClick={chosen11}>Lord Varys</Label>}<br />
                                                    {this.state.sandorClegane === true ? null : <Label className="label-success" onClick={chosen12}>Sandor Clegane</Label>}<br />
                                                    {this.state.gregorClegane === true ? null : <Label className="label-success" onClick={chosen13}>Gregor Clegane</Label>}<br />
                                                    {this.state.greyWorm === true ? null : <Label className="label-success" onClick={chosen14}>Grey Worm</Label>}<br />
                                                    {this.state.missandei === true ? null : <Label className="label-success" onClick={chosen15}>Missandei</Label>}<br />
                                                    {this.state.serJorah === true ? null : <Label className="label-success" onClick={chosen16}>Ser Jorah</Label>}<br />
                                                    {this.state.melisandre === true ? null : <Label className="label-success" onClick={chosen17}>Melisandre</Label>}<br />
                                                    {this.state.theNightKing === true ? null : <Label className="label-success" onClick={chosen18}>The Night King</Label>}<br />
                                                    {this.state.theonGreyjoy === true ? null : <Label className="label-success" onClick={chosen19}>Theon Greyjoy</Label>}<br />
                                                    {this.state.yaraGreyjoy === true ? null : <Label className="label-success" onClick={chosen20}>Yara Greyjoy</Label>}<br />
                                                    {this.state.euronGreyjoy === true ? null : <Label className="label-success" onClick={chosen21}>Euron Greyjoy</Label>}<br />
                                                    {this.state.tormund === true ? null : <Label className="label-success" onClick={chosen22}>Tormund</Label>}<br />
                                                    {this.state.brienneOfTarth === true ? null : <Label className="label-success" onClick={chosen23}>Brienne of Tarth</Label>}<br />
                                                    {this.state.serDavosSeaworth === true ? null : <Label className="label-success" onClick={chosen24}>Ser Davos Seaworth</Label>}<br />
                                                    {this.state.podrickPayne === true ? null : <Label className="label-success" onClick={chosen25}>Podrick Payne</Label>}<br />
                                                    {this.state.meeraReed === true ? null : <Label className="label-success" onClick={chosen26}>Meera Reed</Label>}<br />
                                                    {this.state.gendry === true ? null : <Label className="label-success" onClick={chosen27}>Gendry</Label>}<br />
                                                    {this.state.serBronn === true ? null : <Label className="label-success" onClick={chosen28}>Ser Bronn</Label>}<br />
                                                    {this.state.daarioNaharis === true ? null : <Label className="label-success" onClick={chosen29}>Daario Naharis</Label>}<br />
                                                    {this.state.bericDondarrion === true ? null : <Label className="label-success" onClick={chosen30}>Beric Dondarrion</Label>}<br />

                                                </Col>
                                                :
                                                <Col xs={6}>

                                                </Col>
                                        }

                                        <Col xs={6} className="text-right">
                                            {this.state.jonSnow === false ? null : <Label className="label-danger" onClick={unchosen1}>Jon Snow</Label>}<br />
                                            {this.state.sansaStark === false ? null : <Label className="label-danger" onClick={unchosen2}>Sansa Stark</Label>}<br />
                                            {this.state.aryaStark === false ? null : <Label className="label-danger" onClick={unchosen3}>Arya Stark</Label>}<br />
                                            {this.state.branStark === false ? null : <Label className="label-danger" onClick={unchosen4}>Bran Stark</Label>}<br />
                                            {this.state.daenerysTargaryen === false ? null : <Label className="label-danger" onClick={unchosen5}>Daenerys Targaryen</Label>}<br />
                                            {this.state.cerseiLannister === false ? null : <Label className="label-danger" onClick={unchosen6}>Cersei Lannister</Label>}<br />
                                            {this.state.jaimeLannister === false ? null : <Label className="label-danger" onClick={unchosen7}>Jaime Lannister</Label>}<br />
                                            {this.state.tyrionLannister === false ? null : <Label className="label-danger" onClick={unchosen8}>Tyrion Lannister</Label>}<br />
                                            {this.state.samwellTarly === false ? null : <Label className="label-danger" onClick={unchosen9}>Samwell Tarly</Label>}<br />
                                            {this.state.gilly === false ? null : <Label className="label-danger" onClick={unchosen10}>Gilly</Label>}<br />
                                            {this.state.lordVarys === false ? null : <Label className="label-danger" onClick={unchosen11}>Lord Varys</Label>}<br />
                                            {this.state.sandorClegane === false ? null : <Label className="label-danger" onClick={unchosen12}>Sandor Clegane</Label>}<br />
                                            {this.state.gregorClegane === false ? null : <Label className="label-danger" onClick={unchosen13}>Gregor Clegane</Label>}<br />
                                            {this.state.greyWorm === false ? null : <Label className="label-danger" onClick={unchosen14}>Grey WOrm</Label>}<br />
                                            {this.state.missandei === false ? null : <Label className="label-danger" onClick={unchosen15}>Missandei</Label>}<br />
                                            {this.state.serJorah === false ? null : <Label className="label-danger" onClick={unchosen16}>Ser Jorah</Label>}<br />
                                            {this.state.melisandre === false ? null : <Label className="label-danger" onClick={unchosen17}>Melisandre</Label>}<br />
                                            {this.state.theNightKing === false ? null : <Label className="label-danger" onClick={unchosen18}>The Night King</Label>}<br />
                                            {this.state.theonGreyjoy === false ? null : <Label className="label-danger" onClick={unchosen19}>Theon Greyjoy</Label>}<br />
                                            {this.state.yaraGreyjoy === false ? null : <Label className="label-danger" onClick={unchosen20}>Yara Greyjoy</Label>}<br />
                                            {this.state.euronGreyjoy === false ? null : <Label className="label-danger" onClick={unchosen21}>Euron Greyjoy</Label>}<br />
                                            {this.state.tormund === false ? null : <Label className="label-danger" onClick={unchosen22}>Tormund</Label>}<br />
                                            {this.state.brienneOfTarth === false ? null : <Label className="label-danger" onClick={unchosen23}>Brienne of Tarth</Label>}<br />
                                            {this.state.serDavosSeaworth === false ? null : <Label className="label-danger" onClick={unchosen24}>Ser Davos Seaworth</Label>}<br />
                                            {this.state.podrickPayne === false ? null : <Label className="label-danger" onClick={unchosen25}>Podrick Payne</Label>}<br />
                                            {this.state.meeraReed === false ? null : <Label className="label-danger" onClick={unchosen26}>Meera</Label>}<br />
                                            {this.state.gendry === false ? null : <Label className="label-danger" onClick={unchosen27}>Gendry</Label>}<br />
                                            {this.state.serBronn === false ? null : <Label className="label-danger" onClick={unchosen28}>Ser Bronn</Label>}<br />
                                            {this.state.daarioNaharis === false ? null : <Label className="label-danger" onClick={unchosen29}>Daario Naharis</Label>}<br />
                                            {this.state.bericDondarrion === false ? null : <Label className="label-danger" onClick={unchosen30}>Beric Dondarrion</Label>}<br />
                                        </Col>
                                    </Row>

                                    {
                                        this.state.submitted === false ?
                                            <div>
                                                {
                                                    this.state.pickCount === 0 ?
                                                        <Row>
                                                            <Col xs={12} className="text-center">
                                                                <Button
                                                                    onClick={this.submit}>
                                                                    Confirm Selection
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        :
                                                        <div className="text-center">
                                                            Picks remaining: {this.state.pickCount}
                                                        </div>

                                                }</div>
                                            :
                                            <Image style={{ marginRight: "auto", marginLeft: "auto" }} src={require("../../Data/loading.gif")} alt="thinking" />
                                    }

                                </Modal.Body>
                            </Modal>
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        )
    }

};

export default Access

