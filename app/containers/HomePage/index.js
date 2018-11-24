/*
 * HomePage
 */
import React from 'react';
import querystring from 'querystring';

const Login = {
  height: '100px',
  left: 'calc(50% - 150px)',
  position: 'absolute',
  top: 'calc(50% - 50px)',
  width: '300px',
};

const Spotify = {
  background: 'rgb(255,255,255)',
  boxShadow: '1px 1px 3px 0 rgba(0,0,0,.1)',
  color: 'rgb(50,50,50)',
  cursor: 'pointer',
  lineHeight: '100px',
  textAlign: 'center',
  width: '100%',
};

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  spotifyLogin() {
    const options = {
      client_id: '46b9171059a344aaab4ced9d06fb834b',
      // redirect_uri: 'http://35.246.254.214/callback', //'localhost:3000/callback',
      redirect_uri: 'http://localhost:3000/callback',
      response_type: 'token',
      scope:
        'user-read-private user-read-email user-top-read ' +
        'user-modify-playback-state',
      show_dialog: true,
    };

    const baseUrl = 'https://accounts.spotify.com';
    const url = `${baseUrl}/authorize?${querystring.stringify(options)}`;

    window.location.href = url;
  }

  render() {
    return (
      <div style={Login}>
        <div onClick={this.spotifyLogin} style={Spotify}>
          Log in with Spotify
        </div>
      </div>
    );
  }
}
