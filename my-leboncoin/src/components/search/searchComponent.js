import React, { Component, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Item, Input } from 'native-base';
import { Card, Title, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView, Text} from 'react-native';


const SearchComponent = (props) => {
  const [input, setInput] = useState('');
  const [filterArray, setFilterArray] = useState([]);

  function is_Blank(input) {
    if (input.length === 0)
      return true;
    else
      return false;
  }

  function checkContainWord(tab)
  {
  
  }

  function checkInputWords(annonce) {
    /* transform input String to an array of word */
    let inputToTab = input.split(" ");
    let titleToTab = annonce.title.split(" ");
    let regexExpression = new RegExp((titleToTab).join('|'), "i");
  
    /* loop on the newTab in order to check if the title of annonce include a word of given input */
    for (let i = 0; i < inputToTab.length; i++)
    {
      if (regexExpression.test(inputToTab[i]) && inputToTab[i].length > 2) {
        return true;
      }
    }
    return false;
  }

  function filterAnnoncesByTitle(annonces) {
    return annonces.filter(checkInputWords)
  }

  return (
    <Container>

      <Header style={styles.backColorBoncoin} >
        <Body>
          <Item>
            <Icon type='FontAwesome' style={styles.iconWhite} name='search' />
            <Input placeholderTextColor='white' value={input} style={[styles.iconWhite]} placeholder='Rechercher sur le boncoin'
              onChangeText={text => {
                setInput(text);
              }}
              onSubmitEditing={() => {
                setFilterArray(filterAnnoncesByTitle(props.annonces));
              }} />
            {!is_Blank(input) &&
              <Button transparent onPress={() => setInput('')} >
                <Icon type='FontAwesome' style={styles.iconWhite} name="remove" />
              </Button>
            }
          </Item>
        </Body>
      </Header>
      { (filterArray.length != 0) &&
        <View style={{ flex: 1 }}>
          <ScrollView >
            <View style={styles.container}>
              {filterArray.map(annonce => {
                return (
                  <Card key={annonce.id} style={styles.cardStyle} onPress={() =>
                    props.navigation.navigate('DetailAnnonce', { id: annonce.id })
                  }
                  >
                    <Card.Cover source={annonce.linkPicture} />
                    <Card.Content>
                      <Title style={styles.title}>{annonce.title}</Title>
                      <Paragraph style={[styles.colorBoncoin, styles.title]}>{annonce.price ? annonce.price : null} {annonce.price ? '€' : null}</Paragraph>
                      <Paragraph>{annonce.location}  {annonce.postalCode}</Paragraph>
                    </Card.Content>
                  </Card>
                )}
              )}
            </View>
          </ScrollView>
        </View>
      }
    </Container>
  )
}

const styles = StyleSheet.create(
  {
    buttonSearch: {
      color: 'white'
    },
    backColorBoncoin:
    {
      backgroundColor: '#C0562A'
    },
    colorBoncoin:
    {
      color: '#C0562A'
    },
    iconWhite: {
      color: 'white'
    },
    title: {
      fontWeight: 'bold'
    },
    cardStyle: {
      width: 180,
      marginVertical: 20
    },
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 10
    }
  });

const mapStateToProps = (state) => {
  return { annonces: state.annonces }
}


export default connect(mapStateToProps)(SearchComponent);