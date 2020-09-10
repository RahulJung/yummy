import React from 'react';
import {AiFillCompass} from "react-icons/ai";

 export default function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
     <AiFillCompass color="red" size="3em"/>
    </button>
  );
}
