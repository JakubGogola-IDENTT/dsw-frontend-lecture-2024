/* global process */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    const {worker} = await import('../mocks/browser');
    console.log('worker:', worker);
    await worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
