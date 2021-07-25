import React from 'react';
import styles from './container.css';

function Container(props) {
    const backgroundColor = props.backgroundColor;
    const content = props.content;
    let className = 'fullContainer ';
    if (backgroundColor) {
        className += backgroundColor
    }

    return <>
        <section className={className}>
            {content}
        </section>
    </>;
}

export default Container;
