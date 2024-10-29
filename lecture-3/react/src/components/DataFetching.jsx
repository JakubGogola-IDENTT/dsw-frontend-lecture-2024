import {useEffect, useState} from 'react';

const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    return data;
};

export function DataFetching() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData()
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (!data && !error) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>GitHub Users</h1>
            {error && <div>{error.message}</div>}
            {data && (
                <ul>
                    {data.map(user => (
                        <li key={user.id}>{user.login}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
