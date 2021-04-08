import React from 'react';
import styles from './surveysteps.css';

function SurveySteps(props) {
    let surveySteps = <div className="survey_bar">
        <div className="survey_steps" style={{width: props.percent}}>{props.stepText}</div>
        <div className="survey_percent">{props.percent}</div>
    </div>
    return surveySteps
}

export default SurveySteps;
