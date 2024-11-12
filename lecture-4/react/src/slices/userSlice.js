import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: 'N/A',
    email: 'N/A',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        resetUser(state) {
            state.name = initialState.name;
            state.email = initialState.email;
        },
    },
});

export const {resetUser, setUser} = userSlice.actions;

export const userReducer = userSlice.reducer;
