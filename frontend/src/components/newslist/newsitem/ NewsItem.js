import React, { Component } from 'react';

import './newsitem.scss';

export default class NewsItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="newsitem newsitem--size newsitem--theme">
                {this.props.data.title}
            </li>
        )
    }
}