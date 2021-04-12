import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink to="/art-survey" activeStyle={activeStyle}>ArtSurvey</NavLink></li>
            </ul>
            <hr />
        </div>
    );
};

export default Menu;