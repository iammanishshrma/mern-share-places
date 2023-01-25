import React, { useState } from 'react';

import Card from 'src/shared/components/UIElements/Card';
import Button from 'src/shared/components/FormElements/Button';
import Modal from 'src/shared/components/UIElements/Modal';
import Map from 'src/shared/components/UIElements/Map';
import './PlaceItem.css';

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHanlder = () => setShowMap(true);

    const closeMapHanlder = () => setShowMap(false);

    return (
        <>
            <Modal
                show={showMap}
                onCancel={closeMapHanlder}
                header={props.address}
                conentClass={'place-item__modal-content'}
                footerClass={'place-item__modal-actions'}
                footer={<Button onClick={closeMapHanlder}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Map className="" center={props.coordinates} zoom={16} />
                </div>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button onClick={openMapHanlder} inverse>
                            VIEW ON MAP
                        </Button>
                        <Button to={`/places/${props.id}/edit`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </>
    );
};

export default PlaceItem;
