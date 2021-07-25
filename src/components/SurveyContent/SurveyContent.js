import React from 'react';
import styles from './surveycontent.css';

function SurveyContent(props) {
    let propsQuestion = props.question;
    const inputId = 'survey_' + props.step;
    const radioListItem = propsQuestion.map((listQuestion, i) =>
        <span key={inputId + i} className="survey_radio_btn">
            <input onClick={() => {
                props.onClick(listQuestion)
            }} id={inputId + i} className="policy_checkbox" type="radio" value={listQuestion}/>
            <label htmlFor={inputId + i}>{listQuestion}</label>
        </span>
    );

    return <>
        <div className="survey_q"><b>Q.</b> {props.title}</div>
        {radioListItem}
    </>;
};

export default SurveyContent;
