/*
 * BandsContainer
 */
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import spotify from 'clients/spotify';

import Band from 'components/Band';
import LikeButtons from 'components/LikeButtons';

import { dislike, like } from 'containers/UserContainer/reducer';

import './styles.css';

const BandWrapper = {
  border: 'solid rgba(0,0,0,.1) 1px',
  height: '450px',
  // margin: '0 auto',
  padding: '20px',
  position: 'relative',
  width: '302px',
};

/* eslint-disable react/prefer-stateless-function */
class Bands extends React.Component {
  constructor(props) {
    super(props);

    const band = props.similar[0];

    this.state = {
      band,
      index: 0,
      like: false,
    };
  }

  like = like => {
    const { dispatchDislike, dispatchLike, similar } = this.props;
    const { index } = this.state;

    like ? dispatchLike(similar[index]) : dispatchDislike(similar[index]);

    this.setState({
      band: similar[index + 1],
      index: index + 1,
      like,
    });
  };

  renderBand = () => {
    const { band } = this.state;
    const { token } = this.props;

    // spotify(token).play(band);

    return (
      <CSSTransition in appear timeout={300} classNames="fade" key={band.id}>
        <Band band={band} token={token} />
      </CSSTransition>
    );
  };

  childFactory = child => {
    const { like } = this.state;

    return React.cloneElement(child, {
      ...child.props,
      classNames: like ? 'like' : 'dislike',
    });
  };

  render() {
    return (
      <>
        {this.state.band && (
          <div style={BandWrapper}>
            <TransitionGroup className="band" childFactory={this.childFactory}>
              {this.renderBand()}
            </TransitionGroup>
            <LikeButtons
              like={this.like}
              next={() => spotify(this.props.token).next()}
            />
          </div>
        )}
      </>
    );
  }
}

Bands.propTypes = {
  similar: PropTypes.array,
  token: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  dispatchDislike: band => dispatch(dislike(band)),
  dispatchLike: band => dispatch(like(band)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Bands);
