import React, { Component } from 'react';
import './tags.scss';

export default class TagsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            tags: ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'],
        }
        this.getTags = this.getTags.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        this.selectedTag = document.getElementsByClassName('tag')[0]
    }

    getTagNames(){
        return this.state.tags;
    }

    getTags(){
        return this.getTagNames().map((tag, index) => this.getTag(tag, index))
    }

    getTag(tag, index){
        return <li className="tag tag--theme tag--size" 
                    key={index} 
                    onClick={this.onClick}>{tag}</li>;
    }

    //change tags and its colors on click
    onClick(event){
        let selectedTag = this.selectedTag;
        let clickedTag = event.target;

        selectedTag.style.backgroundColor = 'black';
        selectedTag.style.color = 'white';
        selectedTag.style.border = 'none';

        clickedTag.style.backgroundColor = 'white';
        clickedTag.style.color = 'black';
        clickedTag.style.border = '2px solid black';

        this.selectedTag = clickedTag;
        this.props.onTagClick(clickedTag.innerText)
    }

    render(){
        return(
            <div className="center">
                <ul className="tags tags--size">
                    { this.getTags()}
                </ul>
            </div>
        )
    }
}

