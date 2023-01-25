import { createBrowserRouter } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';
import User from 'src/user/pages/User';
import NewPlace from 'src/places/pages/NewPlace';
import PageNotFound from 'src/404/PageNotFound';
import UserPlaces from 'src/places/pages/UserPlaces';
import UpdatePlace from 'src/places/pages/UpdatePlace';

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
                path: '/:userId/places',
                element: <UserPlaces />,
            },
            {
                path: '/places/:placeId/edit',
                element: <UpdatePlace />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
]);

export default router;
