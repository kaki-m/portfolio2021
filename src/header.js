import React from 'react';
import ReactDOM from 'react-dom';
import img from './images/adutimaku.png';

export default class Header extends React.Component{
   
    render(){
    
        return (
        <div>
            <header className = "header_first">
                <figure>
		            <img src={img} alt="" width="1024" height="768" />
	            </figure>
            </header>
        </div>
        );
    }
}
