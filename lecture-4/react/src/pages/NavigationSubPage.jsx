import {useCallback} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom';

export function NavigationSubPage() {
    const navigate = useNavigate();

    const handleNavigate = useCallback(() => {
        navigate(`/parametrized-sub-page/${uuidv4()}`);
    }, [navigate]);

    return (
        <div>
            <h1>Navigation Sub Page</h1>
            <p>This is the navigation sub page</p>
            <nav>
                <button onClick={handleNavigate}>
                    Generate UUID and navigate to Prametrized Sub Page
                </button>
            </nav>
        </div>
    );
}
