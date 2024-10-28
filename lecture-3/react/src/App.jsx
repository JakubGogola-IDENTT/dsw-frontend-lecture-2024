import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {store} from './store';
import {Components, Props, Children} from './components';

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
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
