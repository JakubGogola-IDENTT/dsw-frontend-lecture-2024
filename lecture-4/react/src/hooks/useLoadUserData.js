import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../slices/userSlice';

export function useLoadUserData() {
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const userData = localStorage.getItem('user');

            if (!userData) {
                console.info('No user data found in local storage');
                return;
            }

            const {name, email} = JSON.parse(localStorage.getItem('user'));
            dispatch(setUser({name, email}));
        } catch (error) {
            console.error('Failed to load user data', error);
        }
    }, [dispatch]);
}
