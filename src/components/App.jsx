import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import UserInfo from '../containers/UserInfo';
import ErrorMessage from './ErrorMessage'
import Layout from './Layout';

const App = ({ authenticated, errorMessage }) => {
  const layout = authenticated
      ? errorMessage
          ? <ErrorMessage message={errorMessage} />
          : <Layout />
      : <p>Please log in to see photos..</p>;
  return (
    <div>
      <AppBar
        title="Redux 01"
        iconElementRight={<UserInfo />}
      />
      {layout}
    </div>
  );
};
App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

export default App;
