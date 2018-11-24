/*
 * UserContainer
 */
import React from 'react';
import { connect } from 'react-redux';

import { getUser } from './reducer';
import Band from '../../components/Band';

/* eslint-disable react/prefer-stateless-function */
class UserContainer extends React.PureComponent {
  render() {
    const { dislikes, likes, user } = this.props;
    console.log({ user });
    return (
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
    );
  }
}

UserContainer.propTypes = {};

const mapStateToProps = state => ({
  dislikes: getUser(state).dislikes,
  likes: getUser(state).likes,
  user: getUser(state),
});

export default connect(mapStateToProps)(UserContainer);
