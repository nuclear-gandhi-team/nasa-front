import { Marker } from '@react-google-maps/api';

// eslint-disable-next-line react/prop-types
export const LocationMarker = ({ position }) => {
  return <Marker position={position} />;
};
