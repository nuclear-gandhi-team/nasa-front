import { Marker as GoogleMarker } from '@react-google-maps/api';

export const Marker = ({ position }) => {
  return <GoogleMarker position={position} />;
};
