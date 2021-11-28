import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuth = useSelector(s => s.isAuth)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;