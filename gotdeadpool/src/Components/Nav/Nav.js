import React from 'react';
import "./Nav.css";
import { Navbar } from "react-bootstrap";

const Nav = (props) => (
    <Navbar style={{ height: 75 }}>
        <Navbar.Brand>
            {/* <Image style={{width:75, height: 90}} src={require("../../Data/dpthrone.png")} alt="gotdp" /> */}
            Nick's GoT Deadpoool
        </Navbar.Brand>

        <div className="logButton">
            {props.children}
        </div>

    </Navbar>
);

export default Nav