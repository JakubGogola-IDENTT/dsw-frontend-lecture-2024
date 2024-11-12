import {useParams, Link} from 'react-router-dom';

export function ParametrizedSubPage() {
    const {id} = useParams();

    return (
        <div>
            <h1>Parametrized Sub Page</h1>
            <p>This is the parametrized sub page</p>
            <p>
                The id of this page is <strong>{id}</strong>
            </p>
            <nav>
                <Link to="/">Go to Home Page</Link>
            </nav>
        </div>
    );
}
