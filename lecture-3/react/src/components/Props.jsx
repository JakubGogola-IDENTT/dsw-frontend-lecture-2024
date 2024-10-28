import PropTypes from 'prop-types';

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}
Greeting.propTypes = {
    name: PropTypes.string.isRequired,
};

export function Props() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
        </div>
    );
}
