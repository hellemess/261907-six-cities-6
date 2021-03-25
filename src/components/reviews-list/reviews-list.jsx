import PropTypes from 'prop-types';
import React from 'react';
import ReviewItem from '../review-item/review-item';
import {reviewItemType} from '../review-item/review-item.prop';

const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewItemType)
};

export default ReviewsList;
