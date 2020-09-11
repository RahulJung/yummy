import React from 'react';
import StarRatings from 'react-star-ratings';

function Resturants(props) {
  return(
    <div >
      <ul>
        {props.data.map( (item, idx) => (
      <div className="bar-container" key={idx}>
      <div>
        {item.photos ?
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=600&photoreference=${item.photos['0'].photo_reference}&key=AIzaSyDWflt-t3VjsLFlxPueOqMZikZLGV_pL2A`}/> :  null
        }
      </div>
        <div href="" onClick={() => {props.getReview(item.place_id); props.panTo({ lat: item.geometry.location.lat, lng: item.geometry.location.lng }, 20)}}>
        {item.name}
        </div>
       <StarRatings
        rating={item.rating}
        numberOfStars={5}
        name="rate1"
        starDimension="24px"
        starSpacing="0px"
        starRatedColor="rgb(241,92,79)"
        starHoverColor="rgb(241,92,79)"
      ></StarRatings>
      <button>Add Review</button>
    </div>
        ))}
      </ul>
    </div>
  )
}

export default Resturants;