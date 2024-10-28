export const TEMPERATURE_UNITS = {
    FAHRENHEIT: 'F',
    CELSIUS: 'C',
    KELVIN: 'K',
    getAll: () => Object.values(TEMPERATURE_UNITS),
    isValid: value => TEMPERATURE_UNITS.getAll().includes(value),
};
