import {createSlice} from '@reduxjs/toolkit';
import {TEMPERATURE_UNITS} from '../constants/temperatureUnits';

const initialState = {
    temperatureUnits: TEMPERATURE_UNITS.CELSIUS,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setTemperatureUnits(state, action) {
            state.temperatureUnits = action.payload;
        },
    },
});

export const {setTemperatureUnits} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
