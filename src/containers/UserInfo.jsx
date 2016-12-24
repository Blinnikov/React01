import React, { PropTypes, Component } from 'react'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

import './UserInfo.scss';

class UserInfo extends Component {
  componentDidMount() {
    console.log('User info init');
  }

  login() {
    const { dispatch } = this.props;

    // TODO: Rewritre this shit
    // move to async action
    // just to test API works
    VK.Auth.login(response => {
      if (response.session) {
        const { user } = response.session;
        console.log(user);

        dispatch({
          type: "USER_LOGGED_IN",
          firstName: user.first_name,
          lastName: user.last_name
        })
      }
    });
  }

  render () {
    const { firstName } = this.props;

    if(!firstName) {
      return <FlatButton
        onClick={() => this.login()}
        label="Log In"
        className='logged-in'
      />;
    }

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
