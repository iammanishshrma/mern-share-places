import React from 'react';

import Card from 'src/shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No places found. Maybe create one?</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {props.items.map((place) => (
                <PlaceItem
                    id={place.id}
                    key={place.id}
                    title={place.title}
                    image={place.imageUrl}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location}
                    description={place.description}
                />
            ))}
        </ul>
    );
};

export default PlaceList;
