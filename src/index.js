import React from 'react';
import ReactDOM from 'react-dom/client';
import './docs/style/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Context from './docs/context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context>
            <App />
        </Context>
    </BrowserRouter>
);