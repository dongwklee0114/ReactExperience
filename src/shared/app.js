import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';
import ArtSurvey from '../pages/artsurvey';


import { Router } from "react-router-dom";
import history from "../utils/history";

class App extends Component {
    render() {
        return (
            <div>
                <Route history={history} exact path="/" component={Home}/>
                <Route history={history} path="/art-survey/" component={ArtSurvey}/>
            </div>
        );
    }
}

export default App;