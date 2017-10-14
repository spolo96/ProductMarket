// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import type {
  Dispatch,
  MapStateToProps,
  MapDispatchToProps,
  RouterHistory,
  State,
} from '../types';

import TeamView from '../views/team';

import autobind from '../utils/autobind';

import {
  addPlayer,
  addItem,
  switchPlayerTeam,
} from '../actions';

type Props = {
  addPlayer: typeof addPlayer,
  history: RouterHistory,
  switchPlayerTeam: typeof switchPlayerTeam,
};

type ContainerState = $Shape<{
  value: string,
}>;

const mapStateToProps: MapStateToProps<Props> = (state: State) => ({
  players: state.game.association.b.map(id => state.game.players[id]),
});

const mapDispatchToProps: MapDispatchToProps<Props> = (dispatch: Dispatch) => ({
  addPlayer: bindActionCreators(addPlayer, dispatch),
  addItem: bindActionCreators(addItem,dispatch),
  switchPlayerTeam: bindActionCreators(switchPlayerTeam, dispatch),
});

class TeamBContainer extends Component {
  props: Props;
  state: ContainerState;

  constructor(props: Props, context: any) {
    super(props, context);
    autobind(this);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <TeamView
        {...this.props}
        {...this.state}
        addPlayer={this.addPlayer}
        addItem={this.addItem}
        changeTeam={this.changeTeam}
        onChange={this.onChange}
        navigateToOtherTeam={this.navigateToOtherTeam}
        teamName='B'
      />
    );
  }

  onChange(evt) {
    this.setState({ value: evt.target.value });
  }

  changeTeam(id: string) {
    this.props.switchPlayerTeam(id);
  }

  addPlayer() {
    this.props.addPlayer(this.state.value, 'b');
    this.setState({ value: '' });
  }

  addItem() {
    this.props.addItem(this.state.value, 'b');
    this.setState({value: ''});
  }


  navigateToOtherTeam() {
    this.props.history.push('/a');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamBContainer);
