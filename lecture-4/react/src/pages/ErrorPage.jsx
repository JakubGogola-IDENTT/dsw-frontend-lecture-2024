import {useMemo} from 'react';
import {useParams, Link} from 'react-router-dom';

export function ErrorPage() {
    const {code} = useParams();

    const errorDetails = useMemo(() => {
        switch (code) {
            case '403':
                return {
                    reason: 'Forbidden',
                    message: "You don't have permission to access this page",
                };
            case '404':
                return {
                    reason: 'Not Found',
                    message: 'The page you are looking for does not exist',
                };
            case '418':
                return {
                    reason: "I'm a teapot",
                    message:
                        'Server refuses to brew coffee because it is a teapot',
                };
            case '500':
                return {
                    reason: 'Internal Server Error',
                    message: 'An error occurred on the server',
                };
            default:
                return {
                    reason: 'Unexpected error',
                    message: 'Someting went wrong',
                };
        }
    }, [code]);

    return (
        <div>
            <h1>
                {code} - {errorDetails.reason}
            </h1>
            <p>{errorDetails.message}</p>
            <nav>
                <Link to="/">Go to Home Page</Link>
            </nav>
        </div>
    );
}
