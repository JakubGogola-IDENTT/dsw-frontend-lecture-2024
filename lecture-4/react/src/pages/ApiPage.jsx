import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CoffeeApiClient} from '../services/api';
import {useNavigate} from 'react-router-dom';
import { BrewCoffeeButton, CreateCoffeeButton } from '../components';

const apiClient = CoffeeApiClient.create();

export function ApiPage() {
    const [coffees, setCoffees] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isFetching || coffees.length) {
            return;
        }

        setIsFetching(true);

        apiClient
            .getCoffees()
            .then(response => {
                console.log(response);
                setCoffees(response.coffees);
                return response;
            })
            .catch(error => {
                console.error(error);
                navigate(`/error/${error.status}`);
            })
            .finally(() => setIsFetching(false));
    }, [coffees.length, isFetching, navigate]);

    if (!coffees.length) {
        return (
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Coffees</h1>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Coffees</h1>
            <div>
                {coffees.map(coffee => (
                    <div key={coffee.id} className="mb-4">
                        <h2 className="text-lg font-bold">{coffee.name}</h2>
                        <p>{coffee.description}</p>
                    </div>
                ))}
            </div>
            <CreateCoffeeButton />
            <BrewCoffeeButton />
            <nav>
                <Link to="/">Go to Home Page</Link>
            </nav>
        </div>
    );
}
