import React, { Component } from 'react';
import './article.scss';

import moment from 'moment';

export default class ArticleScreen extends Component{
    constructor(props){
        super(props);
        this.setData();
    }

    setData(){
        let data = this.props.location.state.data;
        this.news = {
            image: data.urlToImage,
            date: moment(data.publishedAt).fromNow(),
            author: data.author,
            title: data.title,
            description: data.description,
            content: data.content
        }
    }

    render(){
        return(
            <div>
                <div className="article article--size center">
                    <section className="flex flex--row">
                            <img src={this.news.image} 
                            className="article__image article__image--size"></img>
                        <div className="flex flex--column pd1">
                            <div className="flex flex-row">
                                <span className="article__tag article__tag--size article__tag--theme">
                                    {this.news.date}
                                </span>
                                <span className="article__tag article__tag--size article__tag--theme">
                                    {this.news.author}
                                </span>
                                
                            </div>
                            <h4 className="article__title">{this.news.title}</h4>
                            <p className="article__description">{this.news.description}</p>
                        </div>
                    </section>
                    <p className="article__para">{this.news.content}</p>
                </div>
            </div>
        )
    }
}