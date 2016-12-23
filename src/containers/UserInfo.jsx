import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

import './UserInfo.scss';

let UserInfo = ({ firstName }) => {
  const label = `Hello, ${firstName}`;
  return <FlatButton label={label} className='logged-in' />;
};
UserInfo.propTypes = {
  firstName: PropTypes.string.isRequired
};

const mapStateToProps = ({ userInfo }) => {
  return {
    firstName: userInfo.firstName
  };
};

UserInfo = connect(mapStateToProps)(UserInfo);

export default UserInfo;
