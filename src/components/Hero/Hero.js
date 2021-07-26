import React from 'react';
import styles from './hero.css';

function ImageCard(props) {
    const image = props.image;
    const title = props.title;
    const description = props.description;

    return <>
        <div className="hero">
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </>
}

export default ImageCard;
