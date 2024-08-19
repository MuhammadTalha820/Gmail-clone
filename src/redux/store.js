// store.js
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appslice';

const store = configureStore({
    reducer: {
        appSlice: appReducer
    }
});

export default store;
