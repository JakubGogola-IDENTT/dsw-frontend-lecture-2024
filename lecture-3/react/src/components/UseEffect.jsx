import {useState, useEffect} from 'react';

export function UseEffect() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => ++s);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <p>Elapsed time: {seconds} second(s)</p>;
}
