/*
 * HomePage
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';

import { API_CALL_REQUEST } from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class Callback extends React.PureComponent {
  componentDidMount() {
    this.props.fetchFromSpotify();
  }

  render() {
    return <div>Callback</div>;
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  fetchFromSpotify: () => dispatch({ type: API_CALL_REQUEST }),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'bands', saga });

export default compose(
  withSaga,
  withConnect,
)(Callback);
