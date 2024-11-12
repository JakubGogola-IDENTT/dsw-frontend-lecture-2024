import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    authenticated: false,
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        logIn(state) {
            state.authenticated = true;
        },
        logOut(state) {
            state.authenticated = false;
        },
    },
});

export const {logIn, logOut} = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
