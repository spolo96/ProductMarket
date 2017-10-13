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
import TeamBContainer from '../containers/team-b';

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
        <Switch>
          <Route exact path='/a' component={TeamAContainer} />
          <Route exact path='/b' component={TeamBContainer} />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
