import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/sign-in" />
            }}
        ></Route>
    );
}

export default PrivateRoute;