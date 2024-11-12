import {useState, useReducer} from 'react';

const INTIAL_TEMPERATURE = 10;

const initialState = {temperatureUnits: 'Celsius', temperature: 10};

function reducer(state, action) {
    switch (action.type) {
        case 'changeToCelsius':
            return {temperatureUnits: 'Celsius'};
        case 'changeToFahrenheit':
            return {temperatureUnits: 'Fahrenheit'};
        case 'changeToKelvin':
            return {temperatureUnits: 'Kelvin'};
        case 'reset':
            return initialState;
        case 'incremetTemperature':
            return {...state, temperature: state.temperature + 1};
        default:
            return state;
    }
}

export function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>
                Current temperature: {state.temperature}{' '}
                {state.temperatureUnits}
            </p>
            <button onClick={() => dispatch({type: 'changeToCelsius'})}>
                Set Celsius
            </button>
            <button onClick={() => dispatch({type: 'changeToFahrenheit'})}>
                Set Fahrenheit
            </button>
            <button onClick={() => dispatch({type: 'changeToKelvin'})}>
                Set Kelvin
            </button>
            <button onClick={() => dispatch({type: 'incremetTemperature'})}>
                Increment temperature
            </button>
            {/* <button onClick={() => dispatch({type: 'increment'})}>
                Increment
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>
                Decrement
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'unkown-action'})}>
                Unknown action
            </button> */}
        </div>
    );
}
