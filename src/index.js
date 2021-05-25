/*
 * @Description: 主入口
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-18 23:20:38
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-19 22:41:24
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore  from './store';
import { Provider } from 'mobx-react'

// {/*<React.StrictMode> </React.StrictMode>, */}
ReactDOM.render(

    <Provider { ...new RootStore() }>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
