import {useCallback, useState} from 'react';
import {CoffeeApiClient} from '../services/api';
import {useNavigate} from 'react-router-dom';

const apiClient = CoffeeApiClient.create();

export function BrewCoffeeButton() {
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    const createCoffee = useCallback(async () => {
        setIsFetching(true);

        try {
            await apiClient.brewCoffee(1);
        } catch (error) {
            navigate(`/error/${error.status}`);
        } finally {
            setIsFetching(false);
        }
    }, [navigate]);

    return (
        <button disabled={isFetching} onClick={createCoffee}>
            {isFetching ? 'Brewing in progress...' : 'Brew Coffee!'}
        </button>
    );
}
