import React, { isValidElement } from 'react';
import '../styles/styles.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"

const libraries =['places'];
const mapContainerStyle = {
  height: "50vh",
  width: "50vw",
};
const center = {
  lat: 33.748997,
  lng: -84.387985
}
const options = {
  disableDefaultUI : true,
  zoomControl: true,
}

function Maps() {
  const {isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDWflt-t3VjsLFlxPueOqMZikZLGV_pL2A',
    libraries,
  });

  if(loadError) {
    return 'Error loading maps'
  }

  if(!isLoaded) {
    return 'Loading Maps'
  }

  return (
    <div className="map-container">
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      options={options}
      ></GoogleMap>
    </div>
  )
}

export default Maps