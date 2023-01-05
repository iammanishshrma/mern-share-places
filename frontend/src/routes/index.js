import { createBrowserRouter } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';
import User from 'src/user/pages/User';
import NewPlace from 'src/places/pages/NewPlace';
import PageNotFound from 'src/404/PageNotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <User />,
            },
            {
                path: '/places/new',
                element: <NewPlace />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
]);

export default router;
