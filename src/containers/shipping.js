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

import ShippingView from '../views/shipping';

import autobind from '../utils/autobind';

import {
  
} from '../actions';

type Props = {
  history: RouterHistory,
};

type ContainerState = $Shape<{
  value: string,
}>;

const mapStateToProps: MapStateToProps<Props> = (state: State) => ({
 
});

const mapDispatchToProps: MapDispatchToProps<Props> = (dispatch: Dispatch) => ({
 
});

class ShippingContainer extends Component {
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
      <ShippingView
        {...this.props}
        {...this.state}
        
      />
    );
  }

  onChange(evt) {
    this.setState({ value: evt.target.value });
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingContainer);
