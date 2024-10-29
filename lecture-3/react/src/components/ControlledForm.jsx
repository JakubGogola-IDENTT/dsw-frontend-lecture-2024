import {useState} from 'react';

import './styles.css';

export function ControlledForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    // Handle form submission
    const handleSubmit = event => {
        event.preventDefault(); // Prevents page refresh
        console.log('Form Submitted:', {name, email});
        // Additional processing, such as API calls, could go here
    };

    return (
        <form className="controlled-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </label>
            <button className="form-submit-button" type="submit">
                Submit
            </button>
        </form>
    );
}
