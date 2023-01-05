import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import User from 'src/user/pages/User';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <User />,
            },
        ],
    },
]);

export default router;
