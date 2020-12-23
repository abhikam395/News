import React, { Component } from 'react';
import './newsitem.scss';

export default class NewsItem extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    getData(){
        return this.props.data;
    }

    onClick(){
        this.props.history.push({
            pathname: '/article',
            search: `?${this.props.data.title}`,
            state: {
                data: this.props.data
            }
        })
    }

    render(){
        return(
            <li className="newsitem newsitem--size newsitem--theme" 
                onClick={this.onClick}>
                <img src={this.props.data.urlToImage} 
                    className="newsitem__image newsitem__image--size"></img>
                {this.props.data.title}
            </li>
        )
    }
}