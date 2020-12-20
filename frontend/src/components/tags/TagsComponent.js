import React, { Component } from 'react';
import './tags.scss';

export default class TagsComponent extends Component{
    constructor(){
        super();
        this.state = {
            tags: ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
        }
        this.getTags = this.getTags.bind(this);
    }

    getTagNames(){
        return this.state.tags;
    }

    getTags(){
        return this.getTagNames().map((tag, index) => this.getTag(tag, index))
    }

    getTag(tag, index){
        return <li className="tag tag--theme tag--size" key={index}>{tag}</li>;
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

