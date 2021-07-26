import React from 'react';
import styles from './imagecard.css';

function ImageCard(props) {
    const itemCount = props.itemCount;
    const image = props.image;
    const title = props.title;
    const description = props.description;

    let className = 'col_' + itemCount;

    return <>
        <div className={className}>
            <div className="imageCard">
                <img src={image} alt=""/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </>
}

export default ImageCard;
