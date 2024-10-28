/* global process */
import {combineSlices, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import {weatherSlice} from './slices/weatherSlice';

const rootReducer = combineSlices(weatherSlice);

const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return process.env.NODE_ENV === 'development'
            ? getDefaultMiddleware().concat(logger)
            : getDefaultMiddleware();
    },
});

setupListeners(store.dispatch);

export {store};
