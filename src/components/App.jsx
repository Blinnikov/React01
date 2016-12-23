import React from 'react'
import AppBar from 'material-ui/AppBar';
import UserInfo from '../containers/UserInfo';
import Layout from './Layout';

const App = () => {
  return (
    <div>
      <AppBar
        title="Redux 01"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <UserInfo />
      <Layout />
    </div>
  );
};

export default App;
