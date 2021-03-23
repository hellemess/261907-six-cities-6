import Map from '../map/map';
import {offerItemType} from '../offer-item/offer-item.prop';
import OffersList from '../offers-list/offers-list';
import PropTypes from 'prop-types';
import React from 'react';
import ReviewForm from '../review-form/review-form';
import {reviewItemType} from '../review-item/review-item.prop';
import ReviewsList from '../reviews-list/reviews-list';

const Offer = ({currentId, offers, reviews}) => {
  const currentOffer = offers.find((offer) => offer.id === currentId);
  const {bedrooms, description, goods, host, id, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = currentOffer;
  const ratingWidth = Math.round(rating / 5 * 100);
  const city = currentOffer.city;
  const similarOffers = offers.filter((offer) => offer.id !== currentId);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item  user">
                  <a className="header__nav-link  header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper  user__avatar-wrapper">
                    </div>
                    <span className="header__user-name  user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main  page__main--property">
        <section className="property">
          <div className="property__gallery-container  container">
            <div className="property__gallery">
              {images.map((image, i) => (
                <div key={id + i} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container  container">
            <div className="property__wrapper">
              {isPremium
                ? <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`place-card__bookmark-button  button${isFavorite ? `  property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating  rating">
                <div className="property__stars  rating__stars">
                  <span style={{width: `${ratingWidth}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value  rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature  property__feature--entire">{type}</li>
                {bedrooms > 0
                  ? <li className="property__feature  property__feature--bedrooms">{bedrooms} Bedroom{bedrooms > 1 ? `s` : ``}</li>
                  : ``
                }
                <li className="property__feature  property__feature--adults">Max {maxAdults} adult{maxAdults > 1 ? `s` : ``}</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, i) => <li key={id + i} className="property__inside-item">{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper  user__avatar-wrapper${host.isPro ? `  property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar  user__avatar" src={host.avatarUrl} alt="Host avatar" width="74" height="74" />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews  reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map  map">
            <Map city={city} offers={similarOffers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places  places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={similarOffers} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

Offer.propTypes = {
  currentId: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerItemType),
  reviews: PropTypes.arrayOf(reviewItemType)
};

export default Offer;
