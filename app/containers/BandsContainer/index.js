/*
 * BandsContainer
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';

import Bands from 'components/Bands';
import { getSimilarBands } from './reducer';
import { getToken } from '../Callback/reducer';

/* eslint-disable react/prefer-stateless-function */
class BandsContainer extends React.PureComponent {
  render() {
    let { similar, token } = this.props;

    similar = shuffle(similar);

    return <Bands similar={similar} token={token} />;
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

export default connect(mapStateToProps)(BandsContainer);
