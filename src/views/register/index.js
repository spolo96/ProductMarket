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

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const RegisterView = ({

}: Props) => (
    <Container>
      <Header as='h1'>Register </Header>
      <Form>
      <Form.Field>
        <label>Full name</label>
        <input placeholder='Full name...' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password...' />
      </Form.Field>
      <Form.Field>
        <label>Rewrite password</label>
        <input placeholder='Password...' />
      </Form.Field>
      <Form.Field>
        <label>Username</label>
        <input placeholder='amason, wpolo, etc...' />
      </Form.Field>
      <Form.Field>
      <Form.Select label='Gender' options={options} placeholder='Gender' />
        </Form.Field>
      <Form.Field>
      <Form.Group inline>
      <Form.Field>
        <label>Credit Card Number</label>
        <Input placeholder='(xxxx-xxxx-xxxx)' />
      </Form.Field>
      <Form.Field>
        <label>Expiration Date</label>
        <Input placeholder='xxx' />
      </Form.Field>
    </Form.Group>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Confirm</Button>
    </Form>
    </Container>
  );

export default RegisterView;
