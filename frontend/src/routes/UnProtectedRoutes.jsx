import React, { Fragment, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'src/shared/context/auth-context';

const UnProtectedRoute = (props, { path }) => {
    const auth = useContext(AuthContext);

    if (auth.isLoggedIn && props.to === '/auth') {
        return <Navigate to="/" replace={true} />;
    }

    return <Fragment>{props.children}</Fragment>;
};

export default UnProtectedRoute;
