import React from 'react';
import './App.css'
import { createRoot } from 'react-dom/client';
import App from './App';

// import { Provider } from 'react-redux'
// import store from './redux/store';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
);

