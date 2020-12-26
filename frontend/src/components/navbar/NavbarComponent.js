import React, { Component } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

export default class NavbarComponent extends Component{

    render(){
        return(
            <div className="navbar navbar--size center">
                <h1><a href="/" className="navbar__name">News</a></h1>
            </div>
        )
    }
}