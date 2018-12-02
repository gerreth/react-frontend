/*
 * UserContainer
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BandAlternative from 'components/BandAlternative';
import { getUser } from './reducer';
// just references!
const iPhonePlus = '400px';
const iPad = '768px';
const iPadPro = '1024px';
const screen = '1366px';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BandWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${iPhonePlus}) {
    width: 50%;
  }

  @media screen and (min-width: ${iPad}) {
    width: 33.3333%;
  }

  @media screen and (min-width: ${iPadPro}) {
    width: 25%;
  }

  @media screen and (min-width: ${screen}) {
    width: 20%;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class UserContainer extends React.PureComponent {
  renderImage = image => {
    return <ImageWrapper style={{ backgroundImage: `url(${image})` }} />;
  };

  renderBand = like => {
    return (
      <BandWrapper>
        <BandAlternative band={like} />
      </BandWrapper>
    );
  };

  render() {
    const { likes, user } = this.props;

    const bands = likes.map(like => this.renderBand(like));

    return <Container>{bands}</Container>;
  }
}

UserContainer.propTypes = {
  likes: PropTypes.array,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  likes: getUser(state).likes,
  user: getUser(state),
});

export default connect(mapStateToProps)(UserContainer);
