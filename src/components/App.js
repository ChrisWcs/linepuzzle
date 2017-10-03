import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            puzzle: [ 'a', 'a', 'b', 'a', 'b', 'b', 'b']
        };
    }

    render(){
        return(
            <h1>...loading</h1>
        );
    }
};

export default App;