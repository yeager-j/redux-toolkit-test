import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';

const store = configureStore({
    reducer: rootReducer
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

