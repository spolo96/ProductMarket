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
  Table,
  Rating,
} from '../../components';

type Props = {

};

const PaymentView = ({

}: Props) => (
    <Container>
      <Header as='h1'>Payment View</Header>
      <Form>
        <Form.Field>

            <Form.Field>
              <label>Credit Card Number</label>
              <Input placeholder='(xxxx-xxxx-xxxx)' />
            </Form.Field>
            <Form.Field>
              <label>Expiration Date</label>
              <Input placeholder='xxx' />
            </Form.Field>
            <Form.Field>
              <label>Country</label>
              <Input placeholder='Colombia, USA...' />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <Input placeholder='Address...' />
            </Form.Field>
            <Form.Field>
              <label>ZIP CODE</label>
              <Input placeholder='xxx' />
            </Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Header as='h3'>Total Amount: $155.000</Header>
        <Button animated='fade'>
      <Button.Content visible>
       Confirm
      </Button.Content>
      <Button.Content hidden>
        I'll buy that!
      </Button.Content>
    </Button>
      </Form>
    </Container>
  );

export default PaymentView;
