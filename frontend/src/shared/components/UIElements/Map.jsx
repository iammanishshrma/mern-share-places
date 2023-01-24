import React, { useEffect, useRef, useMemo } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import './Map.css';

const Map = (props) => {
    const mapRef = useRef();

    const mapsKey = useMemo(() => process.env.REACT_APP_GOOGLE_MAPS_KEY, []);

    const { center, zoom } = props;

    useEffect(() => {
        const loader = new Loader({
            apiKey: mapsKey,
            version: 'weekly',
        });

        loader.load().then(() => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: center,
                zoom: zoom,
            });
            new window.google.maps.Marker({ position: center, map: map });
        });
    }, [center, zoom, mapsKey]);

    return (
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
            Map
        </div>
    );
};

export default Map;
