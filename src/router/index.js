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
        </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
