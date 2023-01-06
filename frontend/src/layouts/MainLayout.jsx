import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from 'src/shared/components/navigation/MainNavigation';

const MainLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
