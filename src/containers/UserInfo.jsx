import React, { PropTypes, Component } from 'react'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

import './UserInfo.scss';

class UserInfo extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "USER_LOGGED_IN",
      firstName: "Igor",
      lastName: "Blinnikov"
    })
  }

  render () {
    const { firstName } = this.props;
    const label = `Hello, ${firstName}`;
    return <FlatButton label={label} className='logged-in' />;
  }
}
UserInfo.propTypes = {
  firstName: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = ({ userInfo }) => {
  return {
    firstName: userInfo.firstName
  };
};

UserInfo = connect(mapStateToProps)(UserInfo);

export default UserInfo;
