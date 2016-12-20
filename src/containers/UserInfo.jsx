import React from 'react'
import { connect } from 'react-redux';

let UserInfo = ({ firstName }) => {
  return <div>Hello, {firstName}</div>;
};

const mapStateToProps = ({ user }) => {
  return {
    firstName: user.firstName
  };
}

UserInfo = connect(mapStateToProps)(UserInfo);

export default UserInfo;
