import {useCallback, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

export function SearchParamsSubPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [paramId, setParamId] = useState(0);

    const addNewParam = useCallback(() => {
        setSearchParams(prevParams => ({
            ...prevParams,
            [`newParam${paramId}`]: uuidv4(),
        }));
        setParamId(counter => counter + 1);
    }, [paramId, setSearchParams]);

    return (
        <div>
            <h1>Search Params Sub Page</h1>
            <p>This is the search params sub page</p>
            <p>
                The search params of this page are{' '}
                <strong>{searchParams.toString()}</strong>
            </p>
            <button onClick={addNewParam}>
                Add newParam=newValue to search params
            </button>
            <nav>
                <Link to="/">Go to Home Page</Link>
            </nav>
        </div>
    );
}
