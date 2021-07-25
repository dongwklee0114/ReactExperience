import React from 'react';
import styles from './innercontainer.css';

function InnerContainer(props) {
    const backgroundColor = props.backgroundColor;
    const content = props.content;
    let className = 'innerContainer ';
    if (backgroundColor) {
        className += backgroundColor
    }

    return <>
        <section className={className}>
            {content}
        </section>
    </>;
}

export default InnerContainer;
