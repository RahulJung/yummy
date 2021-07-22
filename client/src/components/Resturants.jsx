import React, { useState } from "react";
import Reviews from "./Reviews.jsx";
import API from "../../../apikey.js";
import StarRatings from "react-star-ratings";
import ReviewButton from "./ReviewButton.jsx";
import Modal from "react-modal";
import CustomizedDialogs from "./D.jsx";

function Resturants(props) {
  const message = "your place!";

  const [showReview, setReview] = useState(false);
  return (
    <div className="barMain">
      <div className="welcomeMessage">
        <h2>Best Resturant in {message}</h2>
      </div>
      <ul>
        {props.data.map((item, idx) => (
          <div className="bar-container" key={idx}>
            <div>
              {item.photos ? (
                <img
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=250&photoreference=${item.photos["0"].photo_reference}&key=${API}`}
                  className="barImage"
                />
              ) : null}
            </div>
            <div className="dis">
              <div
                className="bar-name"
                onClick={() => {
                  setReview(true);
                  props.updateId(item.place_id);
                  props.getReview(item.place_id);
                  props.panTo(
                    {
                      lat: item.geometry.location.lat,
                      lng: item.geometry.location.lng,
                    },
                    18
                  );
                }}
              >
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

              <div className="address">{item.vicinity}</div>

              <div className="hrs">
                {item.opening_hours ? (
                  <div>
                    {item.opening_hours.open_now ? (
                      <div style={{ color: "green", fontWeight: "bold" }}>
                        Open Now
                      </div>
                    ) : (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {" "}
                        Closed{" "}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>

              <div className="btn">
                <div className="show">
                  <CustomizedDialogs reviews={props.reviews} />
                </div>

                <div className="write">
                  <ReviewButton
                    getReview={props.getReview}
                    review={props.review}
                    rating={props.rating}
                    cName={props.cName}
                    onStarClick={props.onStarClick}
                    changeHandler={props.changeHandler}
                    submitHandler={props.submitHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Resturants;
