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
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
