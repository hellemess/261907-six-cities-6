import PropTypes from 'prop-types';

export const cityType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired
}).isRequired;
