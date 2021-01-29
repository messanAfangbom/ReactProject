import * as React from 'react'
import { Image, View, ScrollView, StyleSheet, Text, StatusBar, } from 'react-native'
import { Button, Icon, Footer, FooterTab, Item, Title, Subtitle } from 'native-base'
import { connect } from 'react-redux'


const Separator = () => (
  <View style={styles.separator} />
);

const DetailAnnonce = ({ navigation, route, annonces }) => {
  let currentAnnonce = annonces[route.params.id - 1];
  return (
    <View style={{ flex: 1 }} >
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor='#FEF0E9' barStyle='default' translucent={false} ></StatusBar>
        <View>
          <Image width='200' height='200' resizeMode="center" source={currentAnnonce.linkPicture} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[styles.contentContainer, styles.title]}>{currentAnnonce.title}</Text>
          <Text style={[styles.contentContainer, styles.colorBoncoin, styles.title]}>{currentAnnonce.price} €</Text>
          <Text style={styles.contentContainer}>{currentAnnonce.date}</Text>

          <Button iconLeft full style={styles.buyButton}>
            <Icon light type='MaterialIcons' name='euro-symbol'></Icon>
            <Text style={{ color: 'white' }}>Acheter</Text>
          </Button>
        </View>

        <Separator />
        <View>
          <Text style={styles.title}>Description</Text>
          <Text>{currentAnnonce.description}</Text>
        </View>
        <Separator />
        <View >
          <View >
            <Text style={[styles.title, styles.contentContainer]}>Livraison</Text>
            <Text style={styles.contentContainer}>Acheter ce bien et profiter des avantages de la livraison Mondial Relay !</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical :10 }}>
              <View >
                <Text style={styles.title}>Mondial Relay</Text>
                <Text>en point Mondial Relay sous 3-5 jours</Text>
              </View>
              <Text style={[styles.colorBoncoin, styles.title]}>3.5 €</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={styles.title}>Colissimo</Text>
                <Text>à votre domicile sous 2-3 jours</Text>
              </View>
              <Text style={[styles.colorBoncoin, styles.title]}>6.45 €</Text>
            </View>
          </View>
          <View style={[styles.paiementSecureView, styles.contentContainer]}>
            <Item>
              <Icon type='EvilIcons' name='lock' style={styles.colorBoncoin} />
              <Text style={styles.title}>Paiements sécurisés avec </Text>
              <Text style={{ fontWeight: 'bold', color: '#C0562A', fontFamily: 'verdana' }}>leboncoin</Text>

            </Item>
            <Text>Votre argent est conservé et le vendeur est payé lorsque vous confirmez la bonne réception du colis</Text>
          </View>
        </View>
        <Separator />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Item>
            <Icon type='FontAwesome' name='map-marker' />
            <Text style={styles.title}>{currentAnnonce.location} ({currentAnnonce.postalCode})</Text>
          </Item>
        </View>
      </ScrollView>
      <Footer >
        <FooterTab style={styles.buyButton}>
          <Button vertical>
            <Icon type='SimpleLineIcons' name="phone" />
            <Text style={{ color: 'white' }}>Contacter</Text>
          </Button>
          <Button vertical>
            <Icon type='Ionicons' name="heart-outline" />
            <Text style={{ color: 'white' }}>Sauvegarder</Text>
          </Button>
          <Button vertical>
            <Icon active light type='MaterialIcons' name='euro-symbol' />
            <Text style={{ color: 'white' }}>Acheter</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 10
  },
  contentContainer: {
    marginVertical: 10
  },
  buyButton:
  {
    backgroundColor: '#C0562A'
  },
  colorBoncoin:
  {
    color: '#C0562A'
  },
  title: {
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  paiementSecureView:
  {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#FEF0E9',
    padding: 10
  },
  image: {
    flex: 1,
    // width:400,
    // height:400,
    resizeMode: 'contain'
  }
});
const mapStateToProps = (state) => {
  return { annonces: state.annonces }
}

export default connect(mapStateToProps)(DetailAnnonce);
