import React from 'react';
import styles from './surveysteps.css';

function SurveySteps(props) {
    return <div className="surveyBar">
        <div className="surveySteps" style={{width: props.percent}}>{props.stepText}</div>
        <div className="surveyPercent">{props.percent}</div>
    </div>
}

export default SurveySteps;
