import React from 'react';
import { Navbar } from "react-bootstrap";

const Nav = (props) => (
    // <Navbar>
    //     <Navbar.Header>
    //         <Navbar.Brand >
    //             Game of Thrones Deadpool
    //         </Navbar.Brand>
    //         <Navbar.Toggle />
    //     </Navbar.Header>
    //     <Navbar.Collapse >
    //         <Navbar.Text >
    //             {/* {props.children} */}
    //         </Navbar.Text>
    //     </Navbar.Collapse>
    // </Navbar>

    <Navbar>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

    // <Navbar>
    //     <Navbar.Brand>Game of Thrones Deadpool</Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //         <Navbar.Text>
    //             Signed in as: 
    //             {/* {props.user} */}
    //             {props.children}
    //         </Navbar.Text>
    //     </Navbar.Collapse>
    // </Navbar>

)

export default Nav