/*
 * Image
 */
import React, { Component } from 'react';
import { get } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';

class Img extends Component {
  constructor(props) {
    super(props);

    this.state = { status: 'constructed', src: get(props, 'image.small.url') };
  }

  onChange = isVisible => {
    const status = this.state.status;

    if (status === 'initialized' || (status === 'constructed' && isVisible)) {
      this.loadLargeImage();
      this.setState({ status: 'loaded' });
    }
    // delayedCall not working properly?
    if (status === 'constructed') {
      this.setState({ status: 'initialized' });
    }
  };

  loadLargeImage = () => {
    const image = new Image();
    this.image = image;
    image.onload = this.onLoad;
    image.onerror = this.onError;
    image.src = this.props.image.large ? this.props.image.large.url : '';
  };

  onLoad = () => {
    this.setState({ src: this.image.src });
  };

  onError = () => {
    console.log('error loading larger version');
  };

  render() {
    const style = {
      background: 'red',
      backgroundImage: `url(${this.state.src})`,
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      bottom: `${this.props.margin || 0}px`,
      left: `${this.props.margin || 0}px`,
      // height: '100%',
      position: 'absolute',
      right: `${this.props.margin || 0}px`,
      top: `${this.props.margin || 0}px`,
      // width: '100%',
    };

    return (
      <VisibilitySensor partialVisibility delayedCall onChange={this.onChange}>
        <div style={style} />
      </VisibilitySensor>
    );
  }
}

export default Img;
