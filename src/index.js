import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/root';
import reportWebVitals from './reportWebVitals';
import style from 'base.css'
export { default as Home } from './pages/home';
export { default as ArtSurvey } from './pages/artsurvey';

// ========================================

// ReactDOM.render(<Survey/>,document.getElementById('root'));


ReactDOM.render(<Root />, document.getElementById('root'));


// ========================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();