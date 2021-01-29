import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

  const SearchComponent = ()=> 
  {
    return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon type='Ionicons' name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon type='FontAwesome'  name='search' />
              </Button>
              <Button transparent>
                <Icon type='Ionicons' name="heart-outline"  />
              </Button>
              
            </Right>
          </Header>
        </Container>
      )
  }
    

export default SearchComponent;