// @flow

import React from 'react';

import './style.css';

import apple from '../../assets/images/apple.jpg'
import watch from '../../assets/images/watch.jpeg'
import photo from '../../assets/images/photo.jpeg'

import type {
  Player,
} from '../../types';

import {
  Button,
  Container,
  Form,
  Header,
  List,
  Icon,
  Image as ImageComponent,
  Item,
  Label,
  Checkbox,
  Input,
} from '../../components';

type Props = {
 
};

const LoginView = ({

}: Props) => (
    <Container>
      <Header as='h1'>Login </Header>
      <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder='amason, wpolo, etc...' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='xxx...' />
      </Form.Field>
      <Button type='submit'>Confirm</Button>
    </Form>
    </Container>
  );

export default LoginView;
