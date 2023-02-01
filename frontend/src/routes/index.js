import { createBrowserRouter } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';
import User from 'src/user/pages/User';
import NewPlace from 'src/places/pages/NewPlace';
import PageNotFound from 'src/404/PageNotFound';
import UserPlaces from 'src/places/pages/UserPlaces';
import UpdatePlace from 'src/places/pages/UpdatePlace';
import Auth from 'src/user/pages/Auth';
import ProtectedRoute from './ProtectedRoutes';
import UnProtectedRoute from './UnProtectedRoutes';

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
                path: '/auth',
                element: (
                    <UnProtectedRoute to="/auth">
                        <Auth />
                    </UnProtectedRoute>
                ),
            },
            {
                path: '/:userId/places',
                element: <UserPlaces />,
            },

            {
                path: '/places/new',
                element: (
                    <ProtectedRoute>
                        <NewPlace />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/places/:placeId',
                element: (
                    <ProtectedRoute>
                        <UpdatePlace />,
                    </ProtectedRoute>
                ),
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
]);

export default router;
