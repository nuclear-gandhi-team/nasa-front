import { Marker as GoogleMarker } from '@react-google-maps/api';

// eslint-disable-next-line react/prop-types
export const Marker = ({ position }) => {
  return <GoogleMarker position={position} />;
};
