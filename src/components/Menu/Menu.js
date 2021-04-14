import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.css'


const Menu = () => {    
    const activeStyle = {
        fontWeight: 'bold'
    };
    let nav = <nav id="header-wrap" className="cf">
                <div id="header-logo"></div>
                
                <div id="header-right">
                    <div id="header-cart">
                        <a id="header-cart-btn"
                        className="login_required"
                        href="">카트</a>
                    </div>
                    <div id="header-mycollection">
                        <a id="header-mycollection-btn"
                        className="login_required"
                        href="">마이컬렉션</a>
                    </div>
                    <div id="userBox">
                        <div id="userBox-loggedIn">
                            <div id="userBox-settingBtn">
                                <span id="userBox-name"></span>
                            </div>
                            <div id="userBox-settingBox">
                                <div className="userBox-settingBox-link _mypage">마이페이지</div>
                                <a href="" className="userBox-settingBox-link _orders header_submenu">작품주문</a>
                                <a href="" className="userBox-settingBox-link _artmoney header_submenu">아트머니</a>
                                <a href="" className="userBox-settingBox-link _contacts header_submenu">제안서신청</a>
                                <a href="" className="userBox-settingBox-link _modify">회원정보</a>
                                <a href=""
                                className="userBox-settingBox-link _logout">로그아웃</a>
                            </div>
                        </div>
                        <div id="userBox-loggedOut" className="cf">
                            <a href="" id="userBox-loginBtn">로그인</a>
                            <a href="" id="userBox-joinBtn">회원가입</a>
                        </div>
                    </div>
                </div>
            </nav>;
    let search = <>
                    <div id="header-searchBar">
                        <form action="" id="header-searchBar-form" method="get">
                            <div id="header-searchBar-inner">
                                <div id="header-searchBar-inputWrapper">
                                    <input type="search" name="sq" id="header-searchBar-sq" placeholder="작가 이름, 작품 제목, 태그, 재료" />
                                    <input type="submit" id="header-searchBar-submit" title="검색" value="" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="header-searchMask"></div>
                </>;  
    let ul = <ul id="header-nav">
                <li><NavLink className="header-navBtn" exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink className="header-navBtn" to="/art-survey" activeStyle={activeStyle}>ArtSurvey</NavLink></li>   
            </ul>;

    return (<>
                <header id="header">
                    {nav}
                    {search}
                    {ul}
                </header>
                <div>
                    <ul>
                    </ul>
                </div>
            </>
    );
};

export default Menu;