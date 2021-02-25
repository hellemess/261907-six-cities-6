import OfferItem from '../offer-item/offer-item';
import {offersValidation} from '../../validation';
import React, {useState} from 'react';

const OffersList = ({offers}) => {
  const [active, setActive] = useState(``);

  return offers.map((offer) => <OfferItem key={offer.id} onMouseEnter={() => {setActive(offer.id)}} offer={offer} />)
};

OffersList.propTypes = offersValidation;

export default OffersList;