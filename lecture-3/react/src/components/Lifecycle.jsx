import {useState, useEffect} from 'react';

export function Lifecycle() {
    const [count, setCount] = useState(0);

    // Runs once after the component mounts
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component will unmount'); // Cleanup before unmounting
        };
    }, []); // Empty dependency array triggers it once, like componentDidMount

    // Runs on every render or when 'count' changes
    useEffect(() => {
        console.log('Component updated: count is now', count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevState => ++prevState)}>
                Increase Count
            </button>
        </div>
    );
}
