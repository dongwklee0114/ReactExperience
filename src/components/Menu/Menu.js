import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './menu.css'


const Menu = () => {
    const activeStyle = {
        fontWeight: 'bold',
        opacity: '1'
    };
    let nav = <nav className="headerWrap cf">
        <div className="headerLoge"/>
        <div className="headerRight">
            <div className="headerColor">
                <a className="headerColorIcon">color</a>
            </div>
            <div className="headerLike">
                <a className="headerLikeIcon">like</a>
            </div>
            <div className="userBox">
                <div className="userBoxLoggedOut cf">
                    <a className="userBoxLoginBtn">로그인</a>
                    <a className="userBoxJoinBtn">회원가입</a>
                </div>
            </div>
        </div>
    </nav>;
    let ul = <ul className="headerNav">
        <li><NavLink className="headerNavBtn" exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink className="headerNavBtn" to="/survey" activeStyle={activeStyle}>Survey</NavLink></li>
        <li><NavLink className="headerNavBtn" to="/skill" activeStyle={activeStyle}>Skill</NavLink></li>
    </ul>;

    return (<>
            <header id="header">
                {nav}
                {ul}
            </header>
        </>
    );
};

export default Menu;