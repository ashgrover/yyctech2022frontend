import { Container } from '@mui/system';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



function MapsAPI({ google, address }) {
  address = !address? "Platform Calgary, Alberta":address;
  const src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFeyT9tNIbTLO4qTuIlarn-PS2dyApBZM&q=";
  const sanitizedAddress = address.city + " " + address.street + " " + address.postal_code;

  return (
    <div className="google-maps" style={{display:"flex", flexFlow:"row nowrap", padding:"0"}}>
      {/* <Map
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
      </Map> */}
  <div dangerouslySetInnerHTML={{ __html: `"<iframe
                width="650"
                height="800"
                frameborder="0" style="border:0"
                referrerpolicy="no-referrer-when-downgrade"
                style="border-style: 500px;width: 100%; height: 120px;"
                src=${src}${sanitizedAddress},canada&zoom=16
                allowfullscreen>
              </iframe>"`}} 
          />;
  
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFeyT9tNIbTLO4qTuIlarn-PS2dyApBZM'
})(MapsAPI);
