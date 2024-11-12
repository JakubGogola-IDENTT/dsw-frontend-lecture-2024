import {Link} from 'react-router-dom';

export function ProtectedPage() {
    return (
        <div>
            <h1>Protected Page</h1>
            <p>
                This is a protected page and requires user&apos; s
                authentication
            </p>
            <nav>
                <Link to="/">Go to Home Page</Link>
            </nav>
        </div>
    );
}
