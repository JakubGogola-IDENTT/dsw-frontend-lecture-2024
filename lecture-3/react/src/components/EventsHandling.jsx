import {useState} from 'react';

export function EventsHandling() {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle click event
    const handleClick = () => {
        alert('Button clicked!');
    };

    // Handle input change event
    const handleChange = event => {
        if (submitted) {
            setSubmitted(false);
        }

        setInputValue(event.target.value);
    };

    // Handle form submission event
    const handleSubmit = event => {
        event.preventDefault(); // Prevent page refresh
        setSubmitted(true);
        console.log('Form submitted with value:', inputValue);
    };

    return (
        <div>
            {/* onClick event example */}
            <button onClick={handleClick}>Click Me</button>

            {/* onChange event example */}
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something"
            />

            {/* onSubmit event example */}
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>

            {/* Display submitted data */}
            {submitted && <p>Submitted value: {inputValue}</p>}
        </div>
    );
}
