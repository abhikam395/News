import React, { Component } from 'react';

import './newsitem.scss';

export default class NewsItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="newsitem newsitem--size newsitem--theme">
                <img src={this.props.data.urlToImage} className="newsitem__image newsitem__image--size"></img>
                {this.props.data.title}
            </li>
        )
    }
}