import {Link} from 'react-router-dom';
import {Authentication} from '../components';
import {useLoadUserData} from '../hooks';

import './styles.css';

export function HomePage() {
    useLoadUserData();
    return (
        <div className="home-page-container">
            <h1>Home Page</h1>
            <p>This is the home page</p>
            <Authentication />
            <nav className="navigation-container">
                <Link to="/sub-page">Go to Sub Page</Link>
                <Link to="/parametrized-sub-page/123">
                    Go to Parametrized Sub Page with id 123
                </Link>
                <Link to="/search-params-sub-page?example-key=example-value">
                    Go to Search Params Sub Page
                </Link>
                <Link to="/navigation-sub-page">Go to Navigation Sub Page</Link>
                <Link to="/protected-sub-page">Go to Protected Sub Page</Link>
                <Link to="/settings">Go to Settings Page</Link>
            </nav>
        </div>
    );
}
