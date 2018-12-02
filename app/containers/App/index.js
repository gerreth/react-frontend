/**
 *
 * App.js
 *
 */
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import BandsContainer from 'containers/BandsContainer/Loadable';
import Callback from 'containers/Callback/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import UserContainer from 'containers/UserContainer/Loadable';

import GlobalStyle from '../../global-styles';

const Container = {
  // background: 'rgb(255,226,0)',
  background:
    'linear-gradient(135deg, rgba(255,226,0,0.8) 0%, rgba(255,0,0,0.6) 35%, rgba(255,226,0,0.8) 100%)',
  padding: '10px',
  height: '100%',
  width: '100%',
};

const Content = {
  background: 'rgba(255,255,255,1)',
  boxShadow: '1px 1px 3px 0 rgba(0,0,0,.1)',
  overflow: 'scroll',
  padding: '10px',
  position: 'relative',
  height: '100%',
  width: '100%',
};

const Header = {
  overflow: 'hidden',
  width: '100%',
};

export default class App extends React.Component {
  render() {
    return (
      <div style={Container}>
        <div style={Content}>
          <div style={Header}>
            <Link style={{ display: 'inline-block', padding: '10px' }} to="/">
              Home
            </Link>
            <Link
              style={{ display: 'inline-block', padding: '10px' }}
              to="/bands"
            >
              Bands
            </Link>
            <Link
              style={{ display: 'inline-block', padding: '10px' }}
              to="/user"
            >
              User
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/bands" component={BandsContainer} />
            <Route exact path="/user" component={UserContainer} />
            <Route exact path="/callback" component={Callback} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </div>
      </div>
    );
  }
}
