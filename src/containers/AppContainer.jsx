import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import App from '../components/App'

let AppContainer = ({ authenticated, errorMessage }) => {
  return <App authenticated={authenticated} errorMessage={errorMessage} />
}
AppContainer.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

const mapStateToProps = ({ authenticated, errorMessage }) => {
  return {
    authenticated,
    errorMessage
  };
};

AppContainer = connect(mapStateToProps)(AppContainer);

export default AppContainer;
