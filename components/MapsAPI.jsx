import { Container } from '@mui/system';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



function MapsAPI({ google, address }) {

  return (
    <div className="google-maps" style={{display:"flex", flexFlow:"row nowrap", padding:"0"}}>
      <Map
      containerStyle={{maxWidth: '40.5%', maxHeight:"50%", display:"flex"}}
        google={google}
        zoom={14}
        style={{
          height: '100vh',
          display: "flex",
        }}
        initialCenter={{ lat: 51.04502760046978, lng: -114.06343276192595 }}
      >
        <Marker position={{ lat: 51.04502760046978, lng: -114.06343276192595 }} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFeyT9tNIbTLO4qTuIlarn-PS2dyApBZM'
})(MapsAPI);
