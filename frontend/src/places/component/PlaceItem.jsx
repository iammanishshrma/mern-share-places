import React, { useState, useContext } from 'react';

import Card from 'src/shared/components/UIElements/Card';
import Button from 'src/shared/components/FormElements/Button';
import Modal from 'src/shared/components/UIElements/Modal';
import Map from 'src/shared/components/UIElements/Map';
import { AuthContext } from 'src/shared/context/auth-context';
import './PlaceItem.css';

const PlaceItem = (props) => {
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHanlder = () => setShowMap(true);

    const closeMapHanlder = () => setShowMap(false);

    const showDeleteWarningHandler = () => setShowConfirmModal(true);

    const closeDeleteWarningHandler = () => setShowConfirmModal(false);

    const confirmDeleteHandler = () => {
        console.log('Deleting');
        setShowConfirmModal(false);
    };

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
            <Modal
                show={showConfirmModal}
                onCancel={closeDeleteWarningHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <>
                        <Button inverse onClick={closeDeleteWarningHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETE
                        </Button>
                    </>
                }
            >
                <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter</p>
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
                        {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>}
                        {auth.isLoggedIn && (
                            <Button onClick={showDeleteWarningHandler} danger>
                                DELETE
                            </Button>
                        )}
                    </div>
                </Card>
            </li>
        </>
    );
};

export default PlaceItem;
