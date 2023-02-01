import React, { useState, useCallback } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AuthContext } from './shared/context/auth-context';
import router from './routes';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    );
};

export default App;
