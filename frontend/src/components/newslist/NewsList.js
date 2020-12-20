import React, { Component } from "react";
import './news.scss';

import Api from './../../../../config/api.json';
import NewsItem from './newsitem/ NewsItem';

export default class NewsList extends Component{

    constructor(){
        super();
        this.getNewsList = this.getNewsList.bind(this);
        this.state = {
            news : []
        }
    }

    componentDidMount(){
        fetch(Api.api)
            .then(res => {
                if (res.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                      res.status);
                    return;
                }   
                res.json().then(data => {
                    this.setNews(data['articles'])
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    setNews(news){
        this.setState({
            news: news
        })
    }

    getNews(){
        return this.state.news;
    }

    getNewsList(){
        return this.getNews().map((data, index) => (this.getNewsItem(data, index)))
    }

    getNewsItem(data, index){
        return <NewsItem data={data} key={index}/>
    }

    render(){
        return(
            <ul className="news center">
                {this.getNewsList()}
            </ul>
        )
    }
}