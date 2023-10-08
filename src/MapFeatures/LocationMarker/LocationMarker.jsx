import { Marker } from '@react-google-maps/api';

export const LocationMarker = ({ position }) => {
  return <Marker position={position} />;
};
