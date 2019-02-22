import React, { Component } from "react";

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            poop: "Tada!",
        };

    };

    render(props) {
        return (
            <div>
                <img src={require("../../Data/gotlogo.png")} alt="got"/>
                <img src={require("../../Data/deadpool.png")} alt="dp"/>
            </div>
        );
    };
};

export default Board;