import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from 'pages/home';
import Survey from 'pages/survey';
import Skill from 'pages/skill'

import {Router} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <>
                <Route exact path="/" component={Home}/>
                <Route path="/survey/" component={Survey}/>
                <Route path="/skill/" component={Skill}/>
            </>
        );
    }
}

export default App;