import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './UserInfo.scss';

let UserInfo = ({ firstName, logIn }) => {
  if(!firstName) {
    return <FlatButton
      onClick={() => logIn()}
      label="Log In"
      className='logged-in'
    />;
  }

  const label = `Hello, ${firstName}`;
  return <FlatButton label={label} className='logged-in' />;
}
UserInfo.propTypes = {
  firstName: PropTypes.string,
  logIn: PropTypes.func
};

const mapStateToProps = ({ userInfo }) => {
  return {
    firstName: userInfo.firstName
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn() {
    dispatch(actions.logIn());
  }
});

UserInfo = connect(mapStateToProps, mapDispatchToProps)(UserInfo);

export default UserInfo;
