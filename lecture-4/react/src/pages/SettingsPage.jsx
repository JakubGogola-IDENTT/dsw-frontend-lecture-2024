import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {setUser, resetUser} from '../slices/userSlice';
import './styles.css';

export function SettingsPage() {
    const dispatch = useDispatch();
    const {name, email} = useSelector(state => state.user);

    const [userData, setUserData] = useState({
        name,
        email,
    });

    const onSave = useCallback(
        event => {
            event.preventDefault();
            dispatch(setUser(userData));
            localStorage.setItem('user', JSON.stringify(userData));
        },
        [dispatch, userData],
    );

    const onReset = useCallback(() => {
        dispatch(resetUser());
        setUserData({
            name: 'N/A',
            email: 'N/A',
        });
        localStorage.removeItem('user');
    }, [dispatch]);

    return (
        <div>
            <h1>Settings Page</h1>
            <p>This is the settings page</p>
            <form className=".container" onSubmit={onSave}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={userData.name}
                        onChange={event =>
                            setUserData({
                                ...userData,
                                name: event.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={userData.email}
                        onChange={event =>
                            setUserData({
                                ...userData,
                                email: event.target.value,
                            })
                        }
                    />
                </label>
                <button type="submit">Save</button>
            </form>
            <button type="button" onClick={onReset}>
                Reset
            </button>
            <nav>
                <Link to="/">Home Page</Link>
            </nav>
        </div>
    );
}
