import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
   maxWidth: '50vw',
   height: '100%'
 };

function MapsAPI({google}) {
  return (
   <Map
   google={google}
   zoom={8}
   style={mapStyles}
   initialCenter={{ lat: 47.444, lng: -122.176}}
 >
   <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
  );
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyBFeyT9tNIbTLO4qTuIlarn-PS2dyApBZM'
 })(MapsAPI);
 