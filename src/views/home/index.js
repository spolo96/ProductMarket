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
} from '../../components';

type Props = {
  teamName: string,
  players: Array<Player>,
  addPlayer: () => any,
  addItem: () => any,
  changeTeam: (id: string) => any,
  value: string,
  onChange: (value: string) => any,
  navigateToOtherTeam: () => any,
};

const TeamView = ({
  teamName,
  players,
  addPlayer,
  addItem,
  changeTeam,
  navigateToOtherTeam,
  value,
  onChange,
}: Props) => (
    <Container>
      <Button onClick={navigateToOtherTeam}>Login</Button>
      <Header as='h1'>Product Market (Team {teamName})</Header>
      <Form>
        <Form.Input
          label='Nombre'
          placeholder='Nombre...'
          value={value}
          onChange={onChange}
        />
      </Form>
  
      <Item.Group divided>

        <Item>
          <Item.Image src={apple} />
          <Item.Content>
            <Item.Header as='a'>Mac Triple Mega Combo</Item.Header>
            <Item.Meta>
              <span className='cinema'>$4500</span>
            </Item.Meta>
            <Item.Description>
              A great and triple combo sent by the best manufacturers of Mac itself, just for a good price for everything.
        </Item.Description>
            <Item.Extra>
              <Label>Macbook Pro</Label>
              <Label>iPad Air</Label>
              <Label>iPhone 5</Label>
              <Label icon='globe' content='MultiLanguage' />
              <Button animated='vertical' size='mini' type='submit' onClick={addItem}>
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                  <Icon name='shop' />
                </Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src={watch} />
          <Item.Content>
            <Item.Header as='a'>Dramatic Black Watch</Item.Header>
            <Item.Meta>
              <span className='cinema'>$250</span>
            </Item.Meta>
            <Item.Description>
              Some old fashioned black watch just great for the sake of the 70's.
        </Item.Description>
            <Item.Extra>
              <Label>Black Watch</Label>
              <Label>Good thing</Label>
              <Button animated='vertical' size='mini'>
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                  <Icon name='shop' />
                </Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src={photo} />
          <Item.Content>
            <Item.Header as='a'>Hedgehog's Camera</Item.Header>
            <Item.Meta>
              <span className='cinema'>$750</span>
            </Item.Meta>
            <Item.Description>
              The camera from the Animal Hedgehog "Hog" himself, along with some stories inside it.
        </Item.Description>
            <Item.Extra>
              <Label>Hog's Camera</Label>
              <Label icon='camera retro' content='Camera' />
              <Button animated='vertical' size='mini'>
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                  <Icon name='shop' />
                </Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Header as='h1'>Shooping Cart</Header>
      <List divided verticalAlign='middle'>
        {
          players.map(({ id, name }) => (
            <List.Item>
              <List.Content floated='left'>
                <List.Header>{name}</List.Header>
              </List.Content>
              <List.Content floated='right'>
                <Button onClick={() => changeTeam(id)}>
                  Cambiar
              </Button>
              </List.Content>
            </List.Item>
          ))
        }
      </List>
    </Container>
  );

export default TeamView;
