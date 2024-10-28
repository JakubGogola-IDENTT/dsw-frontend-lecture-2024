import React from 'react';

// DEPREACTED
class ClassComponent extends React.Component {
    render() {
        return <h1>Hello, world!</h1>;
    }
}

function FunctionalComponent() {
    return <h1>Hello, world!</h1>;
}

export function Components() {
    return (
        <div>
            This is a class component: <ClassComponent />
            This is a functional component: <FunctionalComponent />
        </div>
    );
}
