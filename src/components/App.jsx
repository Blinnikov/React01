import React from 'react'
import AppBar from 'material-ui/AppBar';
import UserInfo from '../containers/UserInfo';
import Layout from './Layout';

const App = () => {
  return (
    <div>
      <AppBar
        title="Redux 01"
        iconElementRight={<UserInfo />}
      />
      <Layout />
    </div>
  );
};

export default App;
