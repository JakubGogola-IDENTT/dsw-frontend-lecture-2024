import {createContext, useContext} from 'react';
import {PropTypes} from 'prop-types';

const ToDoContext = createContext();

function ToDoProvider({children}) {
    const todos = [
        {id: 1, text: 'Learn React', done: true},
        {id: 2, text: 'Learn TypeScript', done: false},
        {id: 3, text: 'Learn GraphQL', done: false},
    ];

    return (
        <ToDoContext.Provider value={todos}>{children}</ToDoContext.Provider>
    );
}
ToDoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function ToDoList() {
    const todos = useContext(ToDoContext);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.done ? '✅' : '❌'}
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}

export function UseContext() {
    return (
        <ToDoProvider>
            <ToDoList />
        </ToDoProvider>
    );
}
