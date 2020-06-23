import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './component/MainApp';
import DEFAULT_TEXT from './ultilites';

ReactDOM.render(
  <React.StrictMode>
    <MainApp defaultText={DEFAULT_TEXT}/>
  </React.StrictMode>,
  document.getElementById('root')
);
