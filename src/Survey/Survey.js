import React, {useState, useEffect } from 'react';
import '../index.css';

import SurveySteps from '../SurveySteps/SurveySteps';
import SurveyContent from '../SurveyContent/SurveyContent';

function Survey(props) {
    const [poll, setPoll] = useState([]);
    const [step, setStep] = useState(0);
    const [resultList, setResultList] = useState([]);
    const questionList = [
        {id: 1, title: '환영 인사', question: ["방가", "안녕"]},
        {id: 2, title: '첫번째 질문', question: ["붉은색", "노란색", "주황색", "남색"]},
        {id: 3, title: '두번째 질문', question: ["밥", "고기", "회", "국수", "빵"]},
        {id: 4, title: '세번째 질문', question: ["바지", "셔츠", "치마", "조끼", "반바지"]},
        {id: 5, title: '네번째 질문', question: ["긴머리", "짧은머리", "파마", "단발"]},
        {id: 6, title: '다섯번째 질문', question: ["운동", "독서", "게임", "야구", "축구"]},
    ];
    const stepIndex = Object.keys(questionList).length - 1;
    let percent = '';
    let stepText = '';

    useEffect(() => {
        if (step <= stepIndex) {
            percent = (100 / stepIndex * step) + '%';
            stepText = 'Step.' + [step];
            document.querySelector('.survey_steps').innerHTML = stepText;
            let selectQuestionList = questionList[step]
            setPoll(
                <SurveyContent onClick={radioBtn} key={selectQuestionList.id} step={step}
                title={selectQuestionList.title} question={selectQuestionList.question}/>
            );
            let surveyPrevBtn = document.querySelector('.survey_prev');
            surveyPrevBtn.disabled = false;
            surveyPrevBtn.classList.remove('first_step');

            if (step === 0) {
                document.querySelector('.survey_percent').innerHTML = percent;
                document.querySelector('.survey_steps').style.width = '8%';
                surveyPrevBtn.disabled = true;
                surveyPrevBtn.classList.add('first_step');

            } else if (step === stepIndex) {
                document.querySelector('.survey_percent').innerHTML = percent;
                document.querySelector('.survey_steps').style.width = '90%';
                
            } else {
                document.querySelector('.survey_percent').innerHTML = document.querySelector('.survey_steps').style.width = percent;
            }
        }
    }, [step]);

    function stepBtn(nav) {
        if (nav === 'prev') {
            if (step !== 0) {
                setStep(step - 1);
                let filtered = resultList.splice(0, step-1); // step번째 인덱스 1개를 제거함
                setResultList(filtered);
            }
        } else {
            if (step !== stepIndex) {
                if (document.querySelectorAll('.policy_checkbox:checked').length > 0) {
                    setStep(step + 1);
                } else {
                    alert('항목을 선택해 주세요!');
                }
            } else {
                console.log('qqq');
                if (window.confirm('제출하시겠습니까?')) {
                    window.location.reload();
                };
            }
        }
    };

    function radioBtn(value) {
        if (step === stepIndex) {
            if (window.confirm('제출하시겠습니까?')) {
                window.location.reload();
            };
        } else {
            setResultList([...resultList, value]);
            setStep(step + 1);
        }
    };

    return <section className="survey_base show" >
                <div className="survey" >
                <SurveySteps percent='0' stepText={stepText} />
                <div className="survey_radio">
                    {poll}
                </div>
                <div className="survey_next_prev">
                    <button className="survey_prev first_step" onClick={() => { stepBtn('prev') }}>Prev</button>
                    <button id="survey_1_next" className="survey_next" onClick={() => { stepBtn('next') }}>Next</button>
                </div>
            </div>
        </section>
}

export default Survey;
