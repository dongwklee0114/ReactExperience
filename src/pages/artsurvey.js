import React from 'react';

import ReactDOM from 'react-dom';
import Root from '../client/root';
import Menu from '../components/Menu/Menu';
import Survey from '../components/Survey/Survey';

const ArtSurvey = () => {
    return (
        <div>
            <Menu/>
            <Survey/>
        </div>
    );
};

export default ArtSurvey;