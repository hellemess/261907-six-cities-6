import OfferItem from '../offer-item/offer-item';
import {offerItemType} from '../offer-item/offer-item.prop';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

const OffersList = ({offers}) => {
  const [active, setActive] = useState(null);

  return offers.map((offer) => <OfferItem key={offer.id} isActive={active === offer.id} offer={offer} onMouseEnter={() => {
    setActive(offer.id);
  }} onMouseLeave={() => {
    setActive(null);
  }} />);
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerItemType)
};

export default OffersList;
