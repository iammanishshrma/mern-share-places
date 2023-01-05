import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'src/shared/header/Header';
import Footer from 'src/shared/footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
