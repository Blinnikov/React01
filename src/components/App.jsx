import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import UserInfo from '../containers/UserInfo';
import Layout from './Layout';

const App = ({ authenticated }) => {
  const layout = authenticated
      ? <Layout />
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
  authenticated: PropTypes.bool.isRequired
};

export default App;
