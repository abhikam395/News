import React, { Component } from 'react';
import NewsList from './../components/newslist/NewsList';

export default class HomeScreen extends Component{

    render(){
        return (
            <div>
                <NewsList/>
                {/* <h4>Component</h4>
                <h1>Home</h1> */}
            </div>
        )
    }
}