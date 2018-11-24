/*
 * BandComponent
 */
import React from 'react';

const Band = {
  background: 'rgba(255,255,255,1)',
  border: 'solid rgba(0,0,0,.1) 1px',
  // boxShadow: '1px 1px 3px 0 rgba(0,0,0,.1)',
  height: '330px',
  // left: 'calc(50% - 130px)',
  position: 'absolute',
  textAlign: 'center',
  // top: '20px',
  width: '260px',
};

const Name = {
  lineHeight: '30px',
  padding: '20px',
};

export default props => {
  const { band } = props;

  const image = band.images[0] && band.images[0].url;
  // const image = band.image && band.image.large.url;

  const Image = {
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    height: '260px',
    width: '100%',
  };

  return (
    <div style={Band}>
      <div style={Image} />
      <div style={Name}>{band.name}</div>
    </div>
  );
};
