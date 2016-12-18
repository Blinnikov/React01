import React from 'react'
import { connect } from 'react-redux';

let User = ({ firstName }) => {
  return <div>Hello, {firstName}</div>;
};

const mapStateToProps = ({ user }) => {
  return {
    firstName: user.firstName
  };
}

User = connect(mapStateToProps)(User);

export default User;
