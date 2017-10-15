// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import autobind from '../../utils/autobind';
import compose from '../../utils/compose';

import './styles.css';
import {Menu} from 'semantic-ui-react'

import type {
    Dispatch,
    MapStateToProps,
    MapDispatchToProps,
    RouterHistory,
    State,
} from '../../types';

  type Props = {
    history: RouterHistory,
    location: Location
  
  };
    
  type ContainerState = {

  };

  const mapStateToProps: MapStateToProps<Props> = (state: State) => ({
   
  });
  
  const mapDispatchToProps: MapDispatchToProps<Props> = (dispatch: Dispatch) => ({
    
  });

  const decorators = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
  );
  

  class NavbarComponent extends Component {
    props: Props;
    state: ContainerState;
    constructor(props: Props, context: any) {
        super(props, context);
        autobind(this);
        this.state = { activeItem: '' };
      }
      
      render() {
        
        return (
            <Menu color='green' inverted stackable pointing secondary>
            <Menu.Item header onClick={this.onNavigateToHome}> Wolf Market </Menu.Item>
            <Menu.Item name='aboutUs'  active={this.activeItem === 'aboutUs'} color='blue' position='right' onClick={this.onNavigateToAbout} />
            <Menu.Item name='Services' active={this.activeItem === 'Services'} color='blue'onClick={this.onNavigateToServices} />
            <Menu.Item name='Register' active={this.activeItem === 'Register'} color='blue' onClick={this.onNavigateToRegister} />
            </Menu>
        );
      
      }

      pushToNewRouteOnly(pathname) {
        if (pathname !== '') this.props.history.push(pathname);
      }
    
      onNavigateToHome(){
       (e, { name }) => this.setState({ activeItem: name });
        this.pushToNewRouteOnly('/a');
      }
      onNavigateToAbout(){
       (e, { name }) => this.setState({ activeItem: name });
        this.pushToNewRouteOnly('/aboutUs');
      }
    
      onNavigateToServices(evt){
        (e, { name }) => this.setState({ activeItem: name });
        this.pushToNewRouteOnly('/services');
      }
    
      onNavigateToRegister(){
        (e, { name }) => this.setState({ activeItem: name });
        this.pushToNewRouteOnly('/register');
      }

    
  }

export default decorators(NavbarComponent);