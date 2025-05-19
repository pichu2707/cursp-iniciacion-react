import React from 'react'
import ReactDOM from 'react-dom/client'
//import { FirstApp } from './firstApp'
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <CounterApp value={2}/>
    </React.StrictMode>
);

