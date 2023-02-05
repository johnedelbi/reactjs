import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App.jsx';

import './styles/fonts.css'
import './styles/global.css'

const body = document.getElementById('root');
const root = ReactDOM.createRoot(body);
root.render(
  <App />
);