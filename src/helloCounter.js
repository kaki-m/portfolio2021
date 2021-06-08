import React from 'react';
import './helloCounter.scss';

export default class helloCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count_hello:0,

        };
    }
    handleAddHello(){
        this.setState({count_hello: this.state.count_hello +1});
    }
    render(){
        return (
            <div>
                <p>testtext</p>
            <button className = "hello_button" onClick = {()=>{this.handleAddHello()}}>こんにちは!</button>
            <p className = "hello_counter">{this.state.count_hello}</p>
            </div>
            );
    }
}


