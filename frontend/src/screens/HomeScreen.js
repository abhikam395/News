import React, { Component } from 'react';
import NewsList from './../components/newslist/NewsList';
import TagsComponent from './../components/tags/TagsComponent';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTag: 'Business'
        }
        this.onTagClick = this.onTagClick.bind(this);
    }

    onTagClick(name){
        this.setState({selectedTag: name})
    }

    render(){
        return (
            <div>
                <TagsComponent onTagClick={this.onTagClick}/>
                <NewsList {...this.props} selectedTag={this.state.selectedTag}/>
            </div>
        )
    }
}