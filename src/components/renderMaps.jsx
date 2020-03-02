import React from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export const RenderMaps = ({ google }) => {
  return (
    <>
      <div>Render Map</div>
      <Map
        google={google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </>
  );
};

// export default GoogleApiWrapper({
//   apiKey: "TOKEN HERE"
// })(MapContainer);
