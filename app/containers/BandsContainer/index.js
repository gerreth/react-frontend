/*
 * BandsContainer
 */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import PropTypes from 'prop-types';

import Bands from 'components/Bands';
import { getToken } from 'containers/Callback/reducer';
import { getUser } from 'containers/UserContainer/reducer';

import { getSimilarBands, likeOrDislike } from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class BandsContainer extends React.PureComponent {
  likeOrNot = (band, like) => {
    const { likeOrDislike } = this.props;

    likeOrDislike(band, like);
  };

  render() {
    const { similar, token, user } = this.props;

    return (
      <Bands
        similar={similar}
        token={token}
        user={user}
        likeOrNot={this.likeOrNot}
      />
    );
  }
}

BandsContainer.propTypes = {
  similar: PropTypes.array,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  user: getUser(state).spotify.id,
  similar: getSimilarBands(state),
  token: getToken(state),
});

const mapDispatchToProps = dispatch => ({
  likeOrDislike: (band, like) => dispatch(likeOrDislike(band, like)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'bands', saga });

export default compose(
  withConnect,
  withSaga,
)(BandsContainer);
