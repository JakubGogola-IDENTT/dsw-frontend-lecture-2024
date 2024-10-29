import {useState, useMemo} from 'react';
import PropTypes from 'prop-types';

export function ExpensiveCalculationComponent({number}) {
    const [count, setCount] = useState(0);

    // Memoize the result of an expensive calculation
    const expensiveResult = useMemo(() => {
        console.log(`Calculating expensive result for number: ${number}`);
        return number ** 2;
    }, [number]); // Recalculates only when `number` changes

    return (
        <div>
            <p>Expensive Calculation Result: {expensiveResult}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
ExpensiveCalculationComponent.propTypes = {
    number: PropTypes.number.isRequired,
};

export function UseMemo() {
    return (
        <div>
            <h1>useMemo</h1>
            <ExpensiveCalculationComponent number={5} />
        </div>
    );
}
