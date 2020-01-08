import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


/**
 * React v.s. ReactDom v.s. ReactNative
 * 
 *  - React: UI Library
 *  - ReactDom: React를 Browser에 출력하도록 도와주는 Model
 *  - ReactNative: React를 모바일 앱에서 출력하도록 도와주는 Model
 */

// ReactDOM 은 render 한다. App을 id 가 root 인 곳에
// ReactDOM.render(reactElement, domContainerNode)
ReactDOM.render(<App />, document.getElementById('root'));

