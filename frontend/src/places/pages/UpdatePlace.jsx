import React from 'react';
import { useParams } from 'react-router-dom';

import Input from 'src/shared/components/FormElements/Input';
import Button from 'src/shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from 'src/shared/utils/validators';

const DUMMY_PLACES = [
    {
        id: 'p1',
        titile: 'SparxIt',
        description: 'A web development company',
        imageUrl:
            'data:image/png;base64,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',
        address: 'H-21, First Floor, Sector 63, Noida, Uttar Pradesh 201301',
        location: {
            lat: 28.6303952,
            lng: 77.377176,
        },
        creator: 'u1',
    },
    {
        id: 'p2',
        titile: 'SparxIt',
        description: 'A web development company',
        imageUrl:
            'data:image/png;base64,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',
        address: 'H-21, First Floor, Sector 63, Noida, Uttar Pradesh 201301',
        location: {
            lat: 28.6303952,
            lng: 77.377176,
        },
        creator: 'u2',
    },
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        );
    }
    return (
        <form>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                onInput={() => {}}
                value={identifiedPlace.titile}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min 5 characters)."
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                UPDATE PLACE
            </Button>
        </form>
    );
};

export default UpdatePlace;
