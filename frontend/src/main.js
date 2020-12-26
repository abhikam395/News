import React, { Suspense } from 'react';
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
        <Suspense fallback={<div>Loading</div>}>
            <NavbarComponent/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ React.lazy(() => import('./screens/HomeScreen'))}/>
                    <Route path="/article" component={React.lazy(() => import('./screens/article/ArticleScreen'))}/>
                    <Route path="" component={React.lazy(() => import('./screens/HomeScreen')) }/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    </Provider>,
    document.getElementById('app')
)