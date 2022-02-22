import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import KeyProvider from './Context/KeyProvider'

ReactDOM.render(
  <BrowserRouter  >
    <KeyProvider>
      <App />
    </KeyProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// basename='/credit_sensei/'