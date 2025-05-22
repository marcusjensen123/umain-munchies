/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Client } from './Client';
import { css } from '@emotion/react';

const styles = {
  mainContainer: css`
    box-sizing: border-box;
    height: 100%;
  `,
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div css={styles.mainContainer}>
      <Client />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
