import React, { useState } from "react";
import Reviews from "./Reviews.jsx";
import API from "../../../apikey.js";
import StarRatings from "react-star-ratings";
import ReviewButton from "./ReviewButton.jsx";
import Modal from "react-modal";
import CustomizedDialogs from "./D.jsx";
import { FaMapMarkerAlt } from "react-icons/fa";

function Resturants(props) {
  const message = "your place!";

  const [showReview, setReview] = useState(false);
  return (
    <div className="barMain">
      <h1 className="welcomeMessage">Best Resturants in {message}</h1>
      <h3 className="allResults">All Results</h3>
      <ul className="wrapper">
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
                <h2 className="barName">{item.name}</h2>
              </div>
              <div className="starContainer">
                <StarRatings
                  rating={item.rating}
                  numberOfStars={5}
                  name="rate1"
                  starDimension="24px"
                  starSpacing="0px"
                  starRatedColor="rgb(241,92,79)"
                  starHoverColor="rgb(241,92,79)"
                ></StarRatings>
                <div className="totalRating">{item.user_ratings_total}</div>
              </div>
              <div className="addContainer">
                <FaMapMarkerAlt className="faMarker" />
                <div className="address">{item.vicinity}</div>
              </div>

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
                ) : (
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    {" "}
                    Closed{" "}
                  </div>
                )}
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
