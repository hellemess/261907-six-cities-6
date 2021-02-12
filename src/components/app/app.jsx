import Main from '../main/main';
import PropTypes from 'prop-types';
import React from 'react';

const App = ({offersCount}) => <Main offersCount={offersCount} />;

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
