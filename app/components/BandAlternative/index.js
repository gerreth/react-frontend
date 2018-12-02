/*
 * Alternative Style for Band
 */
import React from 'react';
import Image from 'components/Image';

import styled from 'styled-components';

const BandWrapper = styled.div`
  position: relative;

  :before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const NameWrapper = styled.div`
  bottom: 10px;
  color: #fff;
  font-size: 1em;
  font-weight: 900;
  left: 10px;
  position: absolute;
  right: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  top: 10px;

  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  span {
    bottom: 10px;
    left: 10px;
    position: absolute;
  }
`;

export default props => {
  return (
    <div>
      <BandWrapper>
        <Image
          margin={10}
          image={{ large: props.band.images[0], small: props.band.images[2] }}
        />
        <NameWrapper>
          <span>{props.band.name}</span>
        </NameWrapper>
      </BandWrapper>
    </div>
  );
};
