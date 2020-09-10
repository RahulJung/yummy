import React from 'react';
import StarRatings from 'react-star-ratings';

function Resturants(props) {
  return(
    <div >
      <ul>
        {props.data.map( (item, idx) => (
          <div className="bar-container" key={idx}>
            {item.name}
        <StarRatings
        rating={item.rating}
        numberOfStars={5}
        name="rate1"
        starDimension="24px"
        starSpacing="0px"
        starRatedColor="rgb(255, 180, 0)"
        starHoverColor="rgb(255, 180, 0)"
      ></StarRatings>
        {item.photos ?
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=600&photoreference=${item.photos['0'].photo_reference}&key=AIzaSyDWflt-t3VjsLFlxPueOqMZikZLGV_pL2A`}/> :  null
        }
    </div>
        ))}
      </ul>
    </div>
  )
}

export default Resturants;