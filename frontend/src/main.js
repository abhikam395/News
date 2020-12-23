import React from 'react';
import ReactDOM from 'react-dom';
import './../../backend/assets/scss/main.scss';
import './../../backend/assets/scss/common.scss'

import NavbarComponent from './components/navbar/NavbarComponent';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/article/ArticleScreen';
// import { MyProvider } from './../utils/sharearticle';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <div>
        <NavbarComponent/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route path="/article" component={ArticleScreen}/>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('app')
)