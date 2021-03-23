import {cityType} from './city.prop';
import PropTypes from 'prop-types';
import React from 'react';

const City = ({city, isActive, onClick}) => (
  <li key={city.id} className="locations__item">
    <a className={`locations__item-link  tabs__item${isActive ? `  tabs__item--active` : ``}`} onClick={!isActive ? onClick : null}>
      <span>{city.name}</span>
    </a>
  </li>
);

City.propTypes = {
  city: cityType,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default City;
