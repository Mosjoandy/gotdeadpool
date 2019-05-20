import React from "react";
import { Row, Col, Jumbotron, Image, Panel } from 'react-bootstrap';

const Topper = () => (
    <Row>
        <Col md={12}>
            <Jumbotron className="text-center">
                <Image style={{ marginRight: "auto", marginLeft: "auto" }} src={require("../../Data/gotlogo.png")} alt="got" />
                <Image style={{ marginRight: "auto", marginLeft: "auto" }} src={require("../../Data/deadpool.png")} alt="dp" />
            </Jumbotron>


            <Panel>
                <Panel.Body className="text-center">
                    <h2>Thank you for playing in Nick's Deadpool</h2>
                    <p>Log in to see the winners of the pool.</p>
                    
                    <h3 className="text-danger">DO NOT LOGIN if you have not seen the final episode of Game of Thrones</h3>
                </Panel.Body>
            </Panel>


            <Panel>
                <Panel.Body>
                    <h4>What is this?</h4>
                    <p>Nick's deadpool for Game of Thrones Season 8. You'll need gmail and venmo.</p>

                    <h4>How do I play?</h4>
                    <p>Login using your gmail account and wait for approval.</p>
                    <p>Once approved, you may select 10 characters from a pool of 30.</p>
                    <p>Confirm your deadpool picks and watch Game of Thrones.</p>

                    <h4>What are the wagers?</h4>
                    <p>Your wager is $10. More or less will disqualify you from participating.</p>

                    <h4>How do I win?</h4>
                    <p>We will keep track of who <b>DIES</b> up until the final episode. The person with the most characters <b>ALIVE</b> in their deadpool is the winner. </p>

                    <p>For example, Bob has selected Bran Stark, Arya Stark, and Sansa Stark. His friend John chooses Bran Stark, Cersei Lannister, and Jaime Lanniser.</p>
                    <p>Hypothetically, at the end of the season, only Bran and Arya Stark are alive. Bob wins the wager because he has two characters alive.</p>

                    <h4>Is this safe/legal?</h4>
                    <p>When you log in with your gmail account, all the data is passed through google. Google Authentication allows me only your name and email.</p>
                    <p>Totally. Friendly Wagers are legal last I checked (thanks internet).</p>

                    <h4>How do I know who is playing?</h4>
                    <p>There's a handy button that shows all the players who have paid and have deadpools.</p>

                    <h4>Wait, this isn't how a deadpool actually works...</h4>
                    <p>Let's just settle and call this a variant. We do what we want.</p>

                    <h4>Wouldn't this be easier with a google form, or even paper and pen?</h4>
                    <p>Yes, but by participating on this website, you are helping me grow as a web developer.</p>

                    <h4>One last thing, what if TWO players have the same number of characters alive in their dead pool?</h4>
                    <p>The bounty is split!</p>
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
)

export default Topper;