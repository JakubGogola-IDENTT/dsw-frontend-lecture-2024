import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {store} from './store';
import {
    Components,
    Props,
    Children,
    HooksOrder,
    UseState,
    UseEffect,
    Lifecycle,
    UseContext,
    UseMemo,
    UseCallback,
    UseReducer,
    UseRef,
    EventsHandling,
    ConditionalRendering,
    EventHandlingAndConditionalRendering,
    Lists,
    ListKeys,
    ControlledForm,
    DataFetching,
} from './components';

import './App.css';

function Example({children}) {
    return (
        <div>
            <Link to="/">Go back</Link>
            {children}
        </div>
    );
}

Example.propTypes = {
    children: PropTypes.node.isRequired,
};

function Root() {
    return (
        <div className="container">
            <Link to="/components">Components</Link>
            <Link to="/props">Props</Link>
            <Link to="/children">Children</Link>
            <Link to="/hooks-order">Hooks Order</Link>
            <Link to="/use-state">useState</Link>
            <Link to="/use-effect">useEffect</Link>
            <Link to="/lifecycle">Lifecycle</Link>
            <Link to="/use-context">useContext</Link>
            <Link to="/use-memo">useMemo</Link>
            <Link to="/use-callback">useCallback</Link>
            <Link to="/use-reducer">useReducer</Link>
            <Link to="/use-ref">useRef</Link>
            <Link to="/events-handling">Events Handling</Link>
            <Link to="/conditional-rendering">Conditional Rendering</Link>
            <Link to="/event-handling-and-conditional-rendering">
                Event Handling and Conditional Rendering
            </Link>
            <Link to="/lists">Lists</Link>
            <Link to="/list-keys">List Keys</Link>
            <Link to="/controlled-form">Controlled Form</Link>
            <Link to="/data-fetching">Data Fetching</Link>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Root />} />
                        <Route
                            path="/components"
                            element={
                                <Example>
                                    <Components />
                                </Example>
                            }
                        />
                        <Route
                            path="/props"
                            element={
                                <Example>
                                    <Props />
                                </Example>
                            }
                        />
                        <Route
                            path="/children"
                            element={
                                <Example>
                                    <Children />
                                </Example>
                            }
                        />
                        <Route
                            path="/hooks-order"
                            element={
                                <Example>
                                    <HooksOrder />
                                </Example>
                            }
                        />
                        <Route
                            path="/use-state"
                            element={
                                <Example>
                                    <UseState />
                                </Example>
                            }
                        />
                        <Route
                            path="/use-effect"
                            element={
                                <Example>
                                    <UseEffect />
                                </Example>
                            }
                        />
                        <Route
                            path="/lifecycle"
                            element={
                                <Example>
                                    <Lifecycle />
                                </Example>
                            }
                        />
                        <Route
                            path="/use-context"
                            element={
                                <Example>
                                    <UseContext />
                                </Example>
                            }
                        />
                        <Route
                            path="/use-memo"
                            element={
                                <Example>
                                    <UseMemo />
                                </Example>
                            }
                        />
                        <Route
                            path="/use-callback"
                            element={
                                <Example>
                                    <UseCallback />
                                </Example>
                            }
                        />
                        <Route
                            path="/use-reducer"
                            element={
                                <Example>
                                    <UseReducer />
                                </Example>
                            }
                        />
                        <Route
                            path="/use-ref"
                            element={
                                <Example>
                                    <UseRef />
                                </Example>
                            }
                        />
                        <Route
                            path="/events-handling"
                            element={
                                <Example>
                                    <EventsHandling />
                                </Example>
                            }
                        />
                        <Route
                            path="/conditional-rendering"
                            element={
                                <Example>
                                    <ConditionalRendering />
                                </Example>
                            }
                        />
                        <Route
                            path="/event-handling-and-conditional-rendering"
                            element={
                                <Example>
                                    <EventHandlingAndConditionalRendering />
                                </Example>
                            }
                        />
                        <Route
                            path="/lists"
                            element={
                                <Example>
                                    <Lists />
                                </Example>
                            }
                        />
                        <Route
                            path="/list-keys"
                            element={
                                <Example>
                                    <ListKeys />
                                </Example>
                            }
                        />
                        <Route
                            path="/controlled-form"
                            element={
                                <Example>
                                    <ControlledForm />
                                </Example>
                            }
                        />
                        <Route
                            path="/data-fetching"
                            element={
                                <Example>
                                    <DataFetching />
                                </Example>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
