import React from 'react';
import ReactDOM from 'react-dom';
import './../../backend/assets/scss/main.scss';
import './../../backend/assets/scss/common.scss'

import NavbarComponent from './components/navbar/NavbarComponent';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/article/ArticleScreen';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import store from './../store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <NavbarComponent/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route path="/article" component={ArticleScreen}/>
                    <Route path="" component={HomeScreen}/>
                </Switch>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('app')
)