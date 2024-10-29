import {useState} from 'react';

export function UseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevState => ++prevState)}>
                Increase
            </button>
            <button onClick={() => setCount(prevState => --prevState)}>
                Decrease
            </button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
