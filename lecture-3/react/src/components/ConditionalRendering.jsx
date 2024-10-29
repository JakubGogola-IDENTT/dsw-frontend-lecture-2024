import PropTypes from 'prop-types';

function TernaryOperator({loggedIn = false}) {
    return (
        <div>{loggedIn ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>}</div>
    );
}
TernaryOperator.propTypes = {
    loggedIn: PropTypes.bool,
};

function ShortCircuitOperator({hasNewMessages = false}) {
    return (
        <div>
            <h1>Welcom to Messenger Application!</h1>
            {hasNewMessages && <p>You have new messages!</p>}
        </div>
    );
}
ShortCircuitOperator.propTypes = {
    hasNewMessages: PropTypes.bool,
};

function IfStatement({loading = false}) {
    if (loading) {
        return null;
    }
    return <h1>Loaded!</h1>;
}
IfStatement.propTypes = {
    loading: PropTypes.bool,
};

export function ConditionalRendering() {
    return (
        <div>
            <TernaryOperator loggedIn />
            <TernaryOperator />
            <ShortCircuitOperator hasNewMessages />
            <ShortCircuitOperator />
            <IfStatement loading />
            <IfStatement />
        </div>
    );
}
