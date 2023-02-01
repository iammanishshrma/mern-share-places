import React, { Fragment, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'src/shared/context/auth-context';

const ProtectedRoute = (props, { path }) => {
    const auth = useContext(AuthContext);

    if (!auth.isLoggedIn) {
        return <Navigate to="/auth" replace={true} />;
    }

    return <Fragment>{props.children}</Fragment>;
};

export default ProtectedRoute;
