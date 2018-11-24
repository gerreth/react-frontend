/*
 * LikeButtons
 */
import React from 'react';
import crossImage from '../../images/cross.png';
import heartImage from '../../images/heart.png';
import nextImage from '../../images/next.png';

const Buttons = {
  background: 'rgb(255,255,255)',
  borderTop: 'solid rgba(0,0,0,.1) 1px',
  bottom: 0,
  display: 'flex',
  left: 0,
  position: 'absolute',
  width: '100%',
};

const Button = {
  height: '60px',
  width: '33%',
};

const Middle = {
  borderLeft: 'solid rgba(0,0,0,.1) 1px',
  borderRight: 'solid rgba(0,0,0,.1) 1px',
};

export default props => {
  const next = () => {
    props.next();
  };

  return (
    <div style={Buttons}>
      <button
        onClick={() => {
          props.like(false);
        }}
        style={Button}
      >
        <img src={crossImage} height="26px" width="26px" />
      </button>
      <button onClick={next} style={{ ...Button, ...Middle }}>
        <img src={nextImage} height="26px" width="26px" />
      </button>
      <button
        onClick={() => {
          props.like(true);
        }}
        style={Button}
      >
        <img src={heartImage} height="26px" width="26px" />
      </button>
    </div>
  );
};
