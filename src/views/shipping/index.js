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
  Card,
} from '../../components';

type Props = {

};

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const ShippingView = ({

}: Props) => (
    <Container>
      <Header as='h1'>Shipping View</Header>
      <Card>
        <Card.Content header='Mac Triple Combo' />
        <Card.Content description={description} />
        <Card.Content extra>
          <Icon name='user' />
          40 people have used this shipping.
    </Card.Content>
        <Card.Content extra>
          Phone: (311) 456 7834
    </Card.Content>
        <Container textAlign='center'>
          <Button animated='fade'>
            <Button.Content visible>
              Deliver to this address
      </Button.Content>
            <Button.Content hidden>
              Sent it now!
      </Button.Content>
          </Button>
        </Container>
      </Card>

      <Card>
        <Card.Content header='Hogs Camera' />
        <Card.Content description={description} />
        <Card.Content extra>
          <Icon name='user' />
          13 people have used this shipping.
    </Card.Content>
        <Card.Content extra>
          Phone: (311) 456 7834
    </Card.Content>
        <Container textAlign='center'>
          <Button animated='fade'>
            <Button.Content visible>
              Deliver to this address
      </Button.Content>
            <Button.Content hidden>
              Sent it now!
      </Button.Content>
          </Button>
        </Container>
      </Card>

      <Form>
        <Form.Field>

          <Form.Field>
            <label>Phone</label>
            <Input placeholder='(xxxx-xxxx-xxxx)' />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <Input placeholder='Barranquila, Miami...' />
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
        </Form.Field>
        <Button>
          <Button.Content visible>
            Send to this address
      </Button.Content>
        </Button>
      </Form>


    </Container>
  );

export default ShippingView;
