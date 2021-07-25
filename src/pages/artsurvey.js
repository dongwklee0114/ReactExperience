import React from 'react';

import ReactDOM from 'react-dom';
import Root from '../client/root';
import Menu from 'components/Menu/Menu';
import Survey from 'components/Survey/Survey';
import Footer from 'components/Footer/Footer';

const ArtSurvey = () => {
    return (
        <>
            <Menu/>
            <Survey/>
            <Footer/>
        </>
    );
};

export default ArtSurvey;