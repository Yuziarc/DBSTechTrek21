import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

export default function PrivateRoute({component: Component, ...rest}) {
    
    const {currentUser} = useAuth()

    return (
        <Route
            {...rest}
            render={props =>{
                return currentUser ? <Component {...props} /> : <Redirect to='/login'/>}
            }
            // takes the rest of the props
            // if we have a currentUser, then we want render the component that got passed into our class and pass all of the props
            // otherwise, if we do not have a currentUser, redirect to /login
        >

        </Route>
    )
}
// wrapper for the current route, get the component and rename it to Component, otherwise