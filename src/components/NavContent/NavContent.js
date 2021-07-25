import React from 'react';
import styles from './navcontent.css';

function NavContent(props) {
    const title = props.title
    const currentIndex = props.currentIndex
    const contentType = props.contentType
    const content = props.content
    const navContentCount = props.contentCount
    let elemContent = null
    let navBtnDot = []

    if (contentType === 'img') {
        elemContent = content.map((item, i) =>
            <img src={item} key={i} alt=""/>
        );
    } else {
        elemContent = content
    }

    for (let i = 0; i < navContentCount; i++) {
        let className = "navBtnDot"
        if (i === currentIndex) {
            className = className + " current"
        }
        navBtnDot.push(
            <div onClick={() => {
                props.onClick(i)
            }} className={className} key={i}>
                <div className="navBtnDotEffect"/>
            </div>
        )
    }
    return <>
        <div className="navContent">
            <h2>{title}</h2>
            <div className="content">
                {elemContent}
            </div>
            <div className="navBtn">
                {navBtnDot}
            </div>
        </div>
    </>
}

export default NavContent;
