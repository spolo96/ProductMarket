// @flow

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import type {
  MapStateToProps,
  MapDispatchToProps,
  State,
} from '../types';

import TeamAContainer from '../containers/team-a';
import RegisterContainer from '../containers/register';
import MyMarketContainer from '../containers/mymarket';
import ShippingContainer from '../containers/shipping';
import PaymentContainer from '../containers/payment';
import LoginContainer from '../containers/login';

import { Navbar } from '../components';

type Props = {
};

const mapStateToProps: MapStateToProps<Props> = (state: State) => ({
});

const mapDispatchToProps: MapDispatchToProps<Props> = (dispath: Dispatch) => ({
});

class RootRouter extends Component {
  props: Props;

  render() {
    return (
      <Router>
         <div className='app'>
         <Navbar/>
        <Switch>
          <Route exact path='/home' component={TeamAContainer} />
          <Route exact path='/register' component={RegisterContainer} />
          <Route exact path='/mymarket' component={MyMarketContainer} />
          <Route exact path='/shipping' component={ShippingContainer} />
          <Route exact path='/payment' component={PaymentContainer} />
          <Route exact path='/login' component={LoginContainer} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
