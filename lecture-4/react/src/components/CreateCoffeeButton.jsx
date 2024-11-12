import {useCallback, useState} from 'react';
import {CoffeeApiClient} from '../services/api';
import {useNavigate} from 'react-router-dom';

const apiClient = CoffeeApiClient.create();

export function CreateCoffeeButton() {
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    const createCoffee = useCallback(async () => {
        setIsFetching(true);

        try {
            await apiClient.createCoffee('New Coffee', 'Description');
        } catch (error) {
            navigate(`/error/${error.status}`);
        } finally {
            setIsFetching(false);
        }
    }, [navigate]);

    return (
        <button disabled={isFetching} onClick={createCoffee}>
            {isFetching ? 'Adding new coffee...' : 'Create Coffee!'}
        </button>
    );
}
