import Authcontext from './context/user/authcontext';
import {useContext} from 'react';
import {Route, Redirect } from 'react-router-dom';

const AuthRoute = ({component: Component, ...rest}) => {
    const {userToken} = useContext(Authcontext);
    return(
        <Route
            {...rest}
            render={(props) => userToken ? 
            <Redirect to="/" /> : <Component {...props} />
            }
            
        />
    )
}

export default AuthRoute;

