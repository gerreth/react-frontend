/*
 * BandsContainer
 */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import { shuffle } from 'lodash';
import PropTypes from 'prop-types';

import Bands from 'components/Bands';
import { getSimilarBands, likeOrDislike } from './reducer';
import saga from './saga';
import { getToken } from '../Callback/reducer';

/* eslint-disable react/prefer-stateless-function */
class BandsContainer extends React.PureComponent {
  likeOrNot = (band, like) => {
    const { likeOrDislike } = this.props;

    likeOrDislike(band, like);
  };

  render() {
    const { similar, token } = this.props;

    return <Bands similar={similar} token={token} likeOrNot={this.likeOrNot} />;
  }
}

BandsContainer.propTypes = {
  similar: PropTypes.array,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
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
