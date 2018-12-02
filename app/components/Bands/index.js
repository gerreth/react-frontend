/*
 * BandsContainer
 */
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import spotify from 'clients/spotify';

import Band from 'components/Band';
import LikeButtons from 'components/LikeButtons';

import './styles.css';

const BandWrapper = {
  // border: 'solid rgba(0,0,0,.1) 1px',
  boxShadow: '1px 1px 3px 0 rgba(0,0,0,.1)',
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
    const { likeOrNot, similar } = this.props;
    const { index } = this.state;

    console.log({ similar });
    console.log(similar[index]);
    likeOrNot(similar[index], like);

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
    if (!this.state.band) return <>No bands to show</>;

    return (
      <div style={BandWrapper}>
        {this.props.similar.length}
        <TransitionGroup className="band" childFactory={this.childFactory}>
          {this.renderBand()}
        </TransitionGroup>
        <LikeButtons
          like={this.like}
          next={() => spotify(this.props.token).next()}
        />
      </div>
    );
  }
}

Bands.propTypes = {
  likeOrNot: PropTypes.func,
  similar: PropTypes.array,
  token: PropTypes.string,
};

export default Bands;
