import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../component/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        titile: 'SparxIt',
        description: 'A web development company',
        imageUrl: 'https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148908629.jpg?w=2000',
        address: 'H-21, First Floor, Sector 63, Noida, Uttar Pradesh 201301',
        location: {
            let: '28.6303952',
            lng: '77.377176',
        },
        creator: 'u1',
    },
    {
        id: 'p1',
        titile: 'SparxIt',
        description: 'A web development company',
        imageUrl: 'https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148908629.jpg?w=2000',
        address: 'H-21, First Floor, Sector 63, Noida, Uttar Pradesh 201301',
        location: {
            let: '28.6303952',
            lng: '77.377176',
        },
        creator: 'u2',
    },
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
