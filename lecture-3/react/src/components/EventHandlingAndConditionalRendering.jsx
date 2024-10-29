import {useState} from 'react';

export function EventHandlingAndConditionalRendering() {
    const [loggedIn, setLoggedIn] = useState(false);

    // Handle click event
    const handleLogin = () => {
        setLoggedIn(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={handleLogin}>
                {loggedIn ? 'Logout' : 'Login'}
            </button>
            {loggedIn ? (
                <h1>You are logged in!</h1>
            ) : (
                <h1>
                    You are logged <output></output>
                </h1>
            )}
        </div>
    );
}
