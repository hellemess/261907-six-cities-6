import React, {useState} from 'react';


const ReviewForm = () => {
  const [userForm, setUserForm] = useState({
    rating: '',
    review: ''
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setUserForm({...userForm, [name]: value});
  }

  const {rating, review} = userForm;

  return (
    <form className="reviews__form  form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label  form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form  form__rating">
        <input className="form__rating-input  visually-hidden" type="radio" name="rating" id="5-stars" value="5" onChange={handleChange} checked={rating === `5`} />
        <label className="reviews__rating-label  form__rating-label" htmlFor="5-stars" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input  visually-hidden" type="radio" name="rating" id="4-stars" value="4" onChange={handleChange} checked={rating === `4`} />
        <label className="reviews__rating-label  form__rating-label" htmlFor="4-stars" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input  visually-hidden" type="radio" name="rating" id="3-stars" value="3" onChange={handleChange} checked={rating === `3`} />
        <label className="reviews__rating-label  form__rating-label" htmlFor="3-stars" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input  visually-hidden" type="radio" name="rating" id="2-stars" value="2" onChange={handleChange} checked={rating === `2`} />
        <label className="reviews__rating-label  form__rating-label" htmlFor="2-stars" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input  visually-hidden" type="radio" name="rating" id="1-star" value="1" onChange={handleChange} checked={rating === `1`} />
        <label className="reviews__rating-label  form__rating-label" htmlFor="1-star" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea  form__textarea" name="review" id="review" placeholder="Tell how was your stay, what you like and what can be improved" value={review} onChange={handleChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit  form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;