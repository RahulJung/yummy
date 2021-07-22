import React from "react";
import { SliderData } from "./SliderData.jsx";
import ImageSlider from "./ImageSlider.jsx";
import PlaceSearch from "./PlaceSearch.jsx";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ImageSlider slides={SliderData} />
      </div>
    );
  }
}

export default LandingPage;
