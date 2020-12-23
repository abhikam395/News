import React, { Component } from "react";
import './news.scss';

import { getApi } from '../../../../config/api';
import NewsItem from './newsitem/ NewsItem';

export default class NewsList extends Component{

    constructor(props){
        super(props);
        this.getNewsList = this.getNewsList.bind(this);
        this.state = {
            news : [],
            selectedTag: 'Business'
        }
        this.fetchNews();
    }

    componentDidUpdate(){
        let tag = this.props.selectedTag;
        if(tag != this.state.selectedTag){
            this.setState({news: [], selectedTag: tag})
            this.fetchNews(tag)
        }
    }

    /**
     * fetch news
     */
    fetchNews(category = 'Business'){
        fetch(getApi(category)).
            then(res => {
                if (res.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    res.status);
                    return;
                }   
                res.json().then(data => {
                    this.setNews(data['articles'])
                    // console.log(data)
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
        return <NewsItem data={data} key={index} 
                    history={this.props.history} 
                    location={this.props.location}/>
    }

    render(){
        return(
            <ul className="news center">
                {this.getNewsList()}
            </ul>
        )
    }
}