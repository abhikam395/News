import React, { Component } from "react";
import './news.scss';

import NewsItem from './newsitem/ NewsItem';
import { connect } from 'react-redux';
import { getNews } from './../../../../apis/news-api';

import { clearNews } from './../../../store/actions/news-actions';
import LoadingComponent from './../common/LoadingComponent';

const NewsListComponent =  class NewsList extends Component{

    constructor(props){
        super(props);
        this.getNewsList = this.getNewsList.bind(this);
        this.state = {
            selectedTag: 'Business'
        }
        getNews('Business')
    }

    componentDidUpdate(){
        let tag = this.props.selectedTag;
        if(tag != this.state.selectedTag){
            //clear news
            this.props.clear;
            this.setState({selectedTag: tag})
            getNews(tag);
        }
    }

    getNewsList(){
        let { data } = this.props;
        return data.map((data, index) => (this.getNewsItem(data, index)))
    }

    getNewsItem(data, index){
        return <NewsItem data={data} key={index} 
                    history={this.props.history} 
                    location={this.props.location}/>
    }

    render(){
        let { data } = this.props;
        
        if(data.length){
            return(
                <ul className="news center">
                    {this.getNewsList()}
                </ul>
                )
            }
        else{
            return <LoadingComponent state="true"></LoadingComponent>
        }    
    }
}

const mapStateToProps = function(store){
    return {
        data: store.newsState.data
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        clear: function(){
            dispatch(clearNews)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListComponent);