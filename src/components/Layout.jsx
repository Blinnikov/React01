import React from 'react';
import Filters from '../containers/Filters';
import PhotoGrid from '../containers/PhotoGrid';

const Layout = () => (
  <div>
    <Filters />
    <div style={styles.layout}>
      <PhotoGrid />
    </div>
  </div>
);

const styles = {
  layout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

export default Layout;
