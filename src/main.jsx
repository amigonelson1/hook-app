import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
