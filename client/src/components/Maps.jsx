import React, { isValidElement, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import "@reach/combobox/styles.css";
import Resturants from './Resturants.jsx'
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
  height: "100%",
  width: "100%",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 33.8231296,
  lng: -84.37432319999999
};

function Maps({getData, data, getReview, review, rating, onStarClick, changeHandler, submitHandler, updateId, reviews, cName}) {
  const {isLoaded, loadError } = useLoadScript({
    // Google API Key
    googleMapsApiKey: 'AIzaSyDWflt-t3VjsLFlxPueOqMZikZLGV_pL2A',
    libraries,
  });

  const [selected, setSelected] = React.useState(null);

  // Function to focus the map on given location
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);


  const panTo = React.useCallback(({ lat, lng }, zoom) => {
    if(!zoom) {
      zoom = 13;
    }
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(zoom);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";


  return (
    <div>
      <div className="search">
      <Search panTo={panTo} getData={getData}/>
      </div>
      <div className="locate">
      <Locate panTo={panTo} />
      </div>
      <div className='main-container'>

        <div className="bar">
          <Resturants data={data} getReview={getReview} panTo={panTo} review={review} rating={rating} onStarClick={onStarClick} changeHandler={changeHandler} submitHandler={submitHandler} updateId={updateId} reviews={reviews} cName={cName}/>
        </div>

        <div className="map">
          <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={center}
          options={options}
          // onClick={onMapClick}
          onLoad={onMapLoad}
          >
          <Marker
          position={{ lat: 33.8231296, lng: -84.37432319999999 }}
          />
          {data.map((item) => (
              <Marker
                // key={`${item.geometry.location.lat}-${item.geometry.location.lng}`}
                key={item.place_id}
                position={{ lat: item.geometry.location.lat, lng: item.geometry.location.lng }}
                // icon={{
                //   origin: new window.google.maps.Point(0, 0),
                //   anchor: new window.google.maps.Point(15, 15),
                //   scaledSize: new window.google.maps.Size(30, 30),
                // }}
                onClick={() => {
                  setSelected(item);
                }}
              />
            ))}
              {selected ? (
              <InfoWindow
                position={{ lat: selected.geometry.location.lat, lng: selected.geometry.location.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  {/* {selected.name} */}

                  <div>
                  {selected.photos ?
                    <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=250&photoreference=${selected.photos['0'].photo_reference}&key=AIzaSyDWflt-t3VjsLFlxPueOqMZikZLGV_pL2A`}/> :  null
                  }
                  </div>
                  <div className="bar-name">
                  {selected.name}
                  </div>
                  <div>
                  <StarRatings
                  rating={selected.rating}
                  numberOfStars={5}
                  name="rate1"
                  starDimension="24px"
                  starSpacing="0px"
                  starRatedColor="rgb(241,92,79)"
                  starHoverColor="rgb(241,92,79)"
                ></StarRatings>
                  </div>
              </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
      </div>
    </div>
  )
}

///////////////////////////////////////////////////



export default Maps