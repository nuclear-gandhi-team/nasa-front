import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

import { LocationMarker } from '../LocationMarker';
import { Marker } from '../Marker';

import { defaultTheme } from './Theme';

import s from './Map.module.css';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  fullscreenControl: false,
  styles: defaultTheme,
};
const Map = ({ center, marker, onMarkerAdd }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  const onClick = React.useCallback(loc => {
    const lat = loc.latLng.lat();
    const lng = loc.latLng.lng();
    console.log({ lat, lng });
    onMarkerAdd({ lat, lng });
  }, []);

  return (
    <div className={s.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
        options={defaultOptions}
      >
        <LocationMarker position={center} />
        {marker.map(pos => {
          return <Marker position={pos} />;
        })}
      </GoogleMap>
    </div>
  );
};

export { Map };
