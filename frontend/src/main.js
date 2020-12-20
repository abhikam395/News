import React from 'react';
import ReactDOM from 'react-dom';
import './../../backend/assets/scss/main.scss'

import NavbarComponent from './components/navbar/NavbarComponent';
import TagsComponent from './components/tags/TagsComponent';

import HomeScreen from './screens/HomeScreen';

ReactDOM.render(
    <div>
        <NavbarComponent/>
        <TagsComponent/>
        <HomeScreen/>
    </div>,
    document.getElementById('app')
)