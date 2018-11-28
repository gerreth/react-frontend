/*
 * UserContainer
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUser } from './reducer';

/* eslint-disable react/prefer-stateless-function */
class UserContainer extends React.PureComponent {
  render() {
    const { dislikes, likes, user } = this.props;
    return (
      <div>
        <div>{user.spotify.display_name}</div>
        <div style={{ display: 'flex', padding: '20px' }}>
          <div>
            {likes.map(like => (
              <p>{like.name}</p>
            ))}
          </div>
          <div>
            {dislikes.map(dislike => (
              <p>{dislike.name}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

UserContainer.propTypes = {
  dislikes: PropTypes.array,
  likes: PropTypes.array,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  dislikes: getUser(state).dislikes,
  likes: getUser(state).likes,
  user: getUser(state),
});

export default connect(mapStateToProps)(UserContainer);
