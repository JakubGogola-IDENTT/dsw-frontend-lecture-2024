/* global process */
import {combineSlices, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import {authenticationSlice} from './slices/authenticationSlice';
import {userSlice} from './slices/userSlice';

const rootReducer = combineSlices(authenticationSlice, userSlice);

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
