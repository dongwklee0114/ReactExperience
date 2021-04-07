import React from 'react';
import '../index.css';

function SurveySteps(props) {
    let surveySteps = <div className="survey_bar">
        <div className="survey_steps" >{props.stepText}</div>
        <div className="survey_percent" >{props.percent}</div>
    </div>
    return surveySteps
}

export default SurveySteps;
