import React, { PropTypes } from 'react'
import { connect } from 'react-redux';

let UserInfo = ({ firstName }) => {
  return <div>Hello, {firstName}</div>;
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
