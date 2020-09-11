import React from 'react';
import StarRatings from 'react-star-ratings';
import ReviewButton from './ReviewButton.jsx'

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
        <div href="" onClick={() => {props.updateId(item.place_id); props.getReview(item.place_id); props.panTo({ lat: item.geometry.location.lat, lng: item.geometry.location.lng }, 17)}}>
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
        <ReviewButton
        getReview={props.getReview}
        review={props.review}
        rating={props.rating}
        onStarClick={props.onStarClick}
        changeHandler={props.changeHandler}
        submitHandler={props.submitHandler}
        />
    </div>
        ))}
      </ul>
    </div>
  )
}

export default Resturants;