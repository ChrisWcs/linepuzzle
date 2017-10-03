import React, { Component } from 'react';
import Line from './Line';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            puzzle: [ 'a', 'a', 'b', 'a', 'b', 'b'],
            first: -1,
        };

        this.swap = this.swap.bind(this);
        this.reducePuzzle = this.reducePuzzle.bind(this);
    }

    reducePuzzle() {
        let temp = [...this.state.puzzle];
        let arr = [];
        let count = 0;
        let curr = "";
        
        for(let i = 0; i < temp.length; i++){
            if(curr === ""){
                curr = temp[i];
                count++;
            } else if( curr === temp[i] ){
                count++;
            } else if( curr !== temp[i] ){
                
            }

        }

    }

    swap( index ){
        return () => {

            if( this.state.first === -1){
                this.setState( () => ({
                    first: index
                }));
            } else {
                if( index + 1 === this.state.first || index - 1 === this.state.first ) {
                    let temp = [...this.state.puzzle];
                    let tempPiece = temp[index];
                    temp[index] = temp[this.state.first];
                    temp[this.state.first] = tempPiece;
                    
                    this.setState( () => ({
                        puzzle: temp,
                        first: -1
                    }));
                }
            }
        };
    }

    render(){
        return(
            <Line arr={this.state.puzzle} func={this.swap}/>
        );
    }
};

export default App;