import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {store} from './store';
import {
    HomePage,
    SubPage,
    ErrorPage,
    ParametrizedSubPage,
    SearchParamsSubPage,
    NavigationSubPage,
    ProtectedPage,
    SettingsPage,
    ApiPage
} from './pages';
import './App.css';
import {AuthenticationGuard} from './components';

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

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sub-page" element={<SubPage />} />
                        <Route
                            path="/parametrized-sub-page/:id"
                            element={<ParametrizedSubPage />}
                        />
                        <Route
                            path="/search-params-sub-page"
                            element={<SearchParamsSubPage />}
                        />
                        <Route
                            path="/navigation-sub-page"
                            element={<NavigationSubPage />}
                        />
                        <Route
                            path="/protected-sub-page"
                            element={
                                <AuthenticationGuard>
                                    <ProtectedPage />
                                </AuthenticationGuard>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <AuthenticationGuard>
                                    <SettingsPage />
                                </AuthenticationGuard>
                            }
                        />
                        <Route path="/api" element={<ApiPage />} />
                        <Route path="/error/:code" element={<ErrorPage />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
