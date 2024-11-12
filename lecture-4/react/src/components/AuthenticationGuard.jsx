import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

export function AuthenticationGuard({children}) {
    const {authenticated} = useSelector(state => state.authentication);

    if (!authenticated) {
        return <Navigate replace to="/error/403" />;
    }

    return children;
}

AuthenticationGuard.propTypes = {
    children: PropTypes.node.isRequired,
};
