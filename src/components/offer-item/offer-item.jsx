import {Link} from 'react-router-dom';
import {offerItemType} from './offer-item.prop';
import PropTypes from 'prop-types';
import React from 'react';

const OfferItem = ({isActive, offer, onMouseEnter, onMouseLeave}) => {
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = offer;
  const ratingWidth = Math.round(rating / 5 * 100);

  return (
    <article className={`cities__place-card  place-card${isActive ? `  cities__place-card--active` : ``}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className="cities__image-wrapper  place-card__image-wrapper">
        <Link to={`/offer/${id}/`}>
          <img className="place-card__image" src={previewImage} alt="Place image" width="260" height="200" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button  button${isFavorite ? `  place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating  rating">
          <div className="place-card__stars  rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}/`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  offer: offerItemType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default OfferItem;
