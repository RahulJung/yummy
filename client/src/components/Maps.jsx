import React, { isValidElement, useEffect } from 'react';
import "@reach/combobox/styles.css";
import regeneratorRuntime from "regenerator-runtime";
import Locate from './FindMe.jsx'
import Search from './PlaceSearch.jsx'
import '../styles/styles.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"



const libraries = ["places"];
const mapContainerStyle = {
  height: "1000px",
  width: "1000px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

function Maps({getData}) {
  const {isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDWflt-t3VjsLFlxPueOqMZikZLGV_pL2A',
    libraries,
  });



  // Function to focus the map on given location
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";


  return (
    <div className="map-container">
      <div>
        {center.lat}
      </div>
      <Search panTo={panTo} getData={getData}/>
      <Locate panTo={panTo} />
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={{ lat: center.lat, lng: center.lng }}
      options={options}
      // onClick={onMapClick}
      onLoad={onMapLoad}
      ></GoogleMap>
      <Marker
      position={{ lat: center.lat, lng: center.lng }}
      />
    </div>
  )
}

///////////////////////////////////////////////////



export default Maps