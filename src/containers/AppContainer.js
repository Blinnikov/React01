import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import App from '../components/App'

let AppContainer = ({ authenticated }) => {
  return <App authenticated={authenticated} />
}
AppContainer.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({ authenticated }) => {
  return {
    authenticated
  };
};

AppContainer = connect(mapStateToProps)(AppContainer);

export default AppContainer;
