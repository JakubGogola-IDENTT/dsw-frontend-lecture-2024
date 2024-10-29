import {useState} from 'react';

export function HooksOrder() {
    const [hidden, setHidden] = useState(false);

    return (
        <div>
            <h1>Today is {hidden ? '???' : new Date().toLocaleDateString()}</h1>
            <button onClick={() => setHidden(prevState => !prevState)}>
                {hidden ? 'Reveal' : 'Hide'}
            </button>
        </div>
    );
}
