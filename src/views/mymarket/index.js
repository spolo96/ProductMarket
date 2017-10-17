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

const MyMarketView = ({

}: Props) => (
    <Container>
      <Header as='h1'>Shopping Cart</Header>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          <Table.Row>
            <Table.Cell>
              <Header as='h2' textAlign='left'>Mac Triple Mega Combo</Header>
            </Table.Cell>
            <Table.Cell singleLine> 1 </Table.Cell>
            <Table.Cell>
              <Rating icon='star' defaultRating={3} maxRating={3} />
            </Table.Cell>
            <Table.Cell textAlign='right'>
              $4500 <br />
            </Table.Cell>
            <Table.Cell>
              Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
            variability in this increase, however, with some nonresponders.
        </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as='h2' textAlign='left'>Dramatic Black Watch</Header>
            </Table.Cell>
            <Table.Cell singleLine>3</Table.Cell>
            <Table.Cell>
              <Rating icon='star' defaultRating={3} maxRating={3} />
            </Table.Cell>
            <Table.Cell textAlign='right'>
              $750 <br />
            </Table.Cell>
            <Table.Cell>
              Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess
            potency
        </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as='h2' textAlign='left'>Hog's Camera</Header>
            </Table.Cell>
            <Table.Cell singleLine>3</Table.Cell>
            <Table.Cell>
              <Rating icon='star' defaultRating={3} maxRating={3} />
            </Table.Cell>
            <Table.Cell textAlign='right'>
              $2250 <br />
            </Table.Cell>
            <Table.Cell>
              Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess
            potency
        </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
    </Container>
  );

export default MyMarketView;
