import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import targets from './images/targets.png';
import soil from './images/soil.png';


export default class ContactMe extends React.Component{
    render(){
        return(
            <div className = "link_div">
            <ul className = "contact_list">
                <li><p className = "mail"><i>s1280219@u-aizu.ac.jp</i></p></li>
                <li>
                <a className = "snsIcon" href="https://github.com/kaki-m">
                <FontAwesomeIcon
                className = "icon_image"
                color="#3eaded"
                icon={faGithubSquare} />
                </a>
                </li>
                <a className = "snsIcon" href="https://twitter.com/kaki">
                <FontAwesomeIcon
                className = "icon_image"
                color="#3eaded"
                icon={faTwitterSquare} />
                </a>
                
               
            </ul>
            <div className = "targets_div">
                <img src = {soil} className = "soil" />
                <img src = {targets} className = "targets" />

            </div>
            </div>
        );
    }
}