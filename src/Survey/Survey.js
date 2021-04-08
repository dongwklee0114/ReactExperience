import React, {useState, useEffect, useRef } from 'react';

import SurveySteps from '../SurveySteps/SurveySteps';
import SurveyContent from '../SurveyContent/SurveyContent';
import styles from './survey.css';

function Survey(props) {
    const [poll, setPoll] = useState([]);
    const [step, setStep] = useState(0);
    const [resultList, setResultList] = useState([]);
    const [stepContent, setStepContent] = useState([]);
    const questionList = [  // 설문 목록
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
    const prevBtnRef = useRef(null);

    useEffect(() => {
        if (step <= stepIndex) {
            percent = (100 / stepIndex * step) + '%';
            stepText = 'Step.' + [step];

            let selectQuestionList = questionList[step]  // step state를 바탕으로 현재 step에 보여줘야할 선택지 필터링
            setPoll(
                <SurveyContent onClick={radioBtn} key={selectQuestionList.id} step={step}
                title={selectQuestionList.title} question={selectQuestionList.question}/>
            );

            prevBtnRef.current.disabled = false;
            prevBtnRef.current.classList.remove('first_step');

            if (step === 0) {  // 가장 첫번째 화면
                percent = '8%';

                prevBtnRef.current.disabled = true;  // prev 버튼 비활성화
                prevBtnRef.current.classList.add('first_step');  // prev 버튼에 first_step 클래스 추가
            } else if (step === stepIndex) {  // 마지막 선택지인 경우
                percent = '90%';
            }

            setStepContent(
                <SurveySteps percent={percent} stepText={stepText} />
            )
        }
    }, [step]);

    function stepBtn(nav) {  // next, prev 버튼 클릭시 동작
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
            } else {  // 마지막 선택지를 고른 경우
                if (window.confirm('설문이 종료되었습니다. \n제출하시겠습니까?')) {
                    window.location.reload();
                };
            }
        }
    };

    function radioBtn(value) {  // radio 버튼 클릭시 동작
        if (step === stepIndex) {  // 마지막 선택지를 고른 경우
            if (window.confirm('제출하시겠습니까?')) {
                window.location.reload();
            };
        } else {
            setResultList([...resultList, value]);  // 기존 state 배열에 선택지를 추가
            setStep(step + 1);
        }
    };

    return <section className="survey_base show">
                <div className="survey">
                    {stepContent}
                <div className="survey_radio">
                    {poll}
                </div>
                <div className="survey_next_prev">
                    <button ref={prevBtnRef} className="survey_prev" onClick={() => { stepBtn('prev') }}>Prev</button>
                    <button className="survey_next" onClick={() => { stepBtn('next') }}>Next</button>
                </div>
            </div>
        </section>
}

export default Survey;
