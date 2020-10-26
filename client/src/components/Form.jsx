import React from "react";
// import axios from 'axios';
import StarRatingComponent from "react-star-rating-component";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this is form", this.props);
    return (
      <form onSubmit={this.props.submitHandler}>
        <div>
          <div>
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={this.props.rating}
              onStarClick={this.props.onStarClick}
            />
          </div>
          <div className="review-customer-name">
            <input
              name="cName"
              placeholder="Display name"
              value={this.props.customerName}
              onChange={this.props.changeHandler}
            />
          </div>
          <div>
            <textarea
              rows="5"
              cols="50"
              placeholder="Review"
              name="review"
              value={this.props.review}
              onChange={this.props.changeHandler}
            ></textarea>
          </div>
          <div>
            <span>
              {/* Click handler to close the form when cancel is clicked */}
              <button onClick={() => this.props.onClick(false)}>Cancel</button>
            </span>
            <button type="submit">Submit review</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
