import {Link} from 'react-router-dom';

export function SubPage() {
    return (
        <div>
            <h1>Sub Page</h1>
            <p>This is the sub page</p>
            <nav>
                <Link to="/">Go to Home Page</Link>
            </nav>
        </div>
    );
}
