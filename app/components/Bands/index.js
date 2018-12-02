/*
 * BandsContainer
 */
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import backend from 'clients/backend';

import Band from 'components/Band';
import LikeButtons from 'components/LikeButtons';

import './styles.css';

import styled from 'styled-components';
// just references!
const iPhonePlus = '400px';
const iPad = '768px';
const iPadPro = '1024px';
const screen = '1366px';

const BandWrapper = styled.div`
  padding: 0px;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${iPad}) {
    margin: 0 auto;
    width: 400px;
  }

  @media screen and (min-width: ${screen}) {
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Bands extends React.Component {
  constructor(props) {
    super(props);

    const band = props.similar[0];

    this.state = {
      band,
      like: false,
    };
  }

  like = like => {
    const { likeOrNot, similar, user } = this.props;

    likeOrNot(similar[0], like);
    backend().play(similar[1], user);

    this.setState({
      band: similar[1],
      like,
    });
  };

  renderBand = () => {
    const { band } = this.state;

    return (
      <CSSTransition in appear timeout={300} classNames="fade" key={band.id}>
        <Band band={band} margin={20} />
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
      <div style={{ padding: '10px' }}>
        <BandWrapper>
          <TransitionGroup className="band" childFactory={this.childFactory}>
            {this.renderBand()}
          </TransitionGroup>
        </BandWrapper>
        <LikeButtons
          like={this.like}
          next={() => backend().next(this.props.user)}
        />
      </div>
    );
  }
}

Bands.propTypes = {
  likeOrNot: PropTypes.func,
  similar: PropTypes.array,
  token: PropTypes.string,
  user: PropTypes.string,
};

export default Bands;
