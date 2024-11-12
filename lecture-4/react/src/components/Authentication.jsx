import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, logOut} from '../slices/authenticationSlice';
import './styles.css';

export function Authentication() {
    const dispatch = useDispatch();
    const {authenticated} = useSelector(state => state.authentication);

    const onClick = useCallback(() => {
        dispatch(authenticated ? logOut() : logIn());
    }, [authenticated, dispatch]);

    return (
        <div className="container">
            <h1>
                {authenticated ? "You're logged in!" : "You're logged out!"}
            </h1>
            <button onClick={onClick}>
                {authenticated ? 'Log out' : 'Log in'}
            </button>
        </div>
    );
}
