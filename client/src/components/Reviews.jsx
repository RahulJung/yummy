import React from 'react';
import '../styles/styles.css';
import StarRatingComponent from 'react-star-rating-component';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="review-list">
        <ul>
          { this.props.reviews.map((item, idx) => (
            <div className="list" key={idx}>
              <div className="review-only">
                <div>
                  {item.cName}
                </div>
                <div className="star">
                  <StarRatingComponent
                    name="rating"
                    starCount={5}
                    value={item.rating}
                  />
                </div>
                <div className="itemReview">
                  { item.review }
                </div>
              </div>
            </div>
          )) }
        </ul>
      </div>
    );
  }
}

export default ReviewList;