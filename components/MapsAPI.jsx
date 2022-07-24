import { Container } from '@mui/system';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



function MapsAPI({ google }) {

  return (
    <div className="google-maps" style={{display:"flex", flexFlow:"row nowrap", padding:"0"}}>
      <Map
      containerStyle={{maxWidth: '40.5%', maxHeight:"50%", display:"flex"}}
        google={google}
        zoom={8}
        style={{
          height: '100vh',
          display: "flex",
          
        }}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.00, lng: -122.00 }} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFeyT9tNIbTLO4qTuIlarn-PS2dyApBZM'
})(MapsAPI);
