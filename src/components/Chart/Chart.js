import React from 'react';
import styles from './chart.css';
import InnerConatiner from "components/InnerContainer/InnerConatiner";

function Chart(props) {
    const title = props.title
    const chartContent = <div className="chartDiv"/>

    return <>
        <div className="chart">
            <h2>{title}</h2>
            <InnerConatiner content={chartContent}/>
        </div>
    </>;
}

export default Chart;
