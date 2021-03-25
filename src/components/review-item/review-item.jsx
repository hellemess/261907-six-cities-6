import dayjs from 'dayjs';
import React from 'react';
import {reviewItemType} from './review-item.prop';

const ReviewItem = ({review}) => {
  const {comment, date, rating, user} = review;
  const ratingWidth = Math.round(rating / 5 * 100);

  return (
    <li className="reviews__item">
      <div className="reviews__user  user">
        <div className="reviews__avatar-wrapper  user__avatar-wrapper">
          <img className="reviews__avatar  user__avatar" src={user.avatarUrl} alt="Reviews avatar" width="54" height="54" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating  rating">
          <div className="reviews__stars  rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{dayjs(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = reviewItemType;

export default ReviewItem;
