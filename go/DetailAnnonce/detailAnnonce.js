import * as React from 'react'
import { Image, View, ScrollView, StyleSheet, Text, Button, } from 'react-native'


const Separator = () => (
  <View style={styles.separator} />
);

const DetailAnnonce = ({ navigation, route }) => {
  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{width:200}}>
          <Image style={[styles.image, {resizeMethod:'scale'}]} source={require('../imagesObjetAvendre/ballon_france.png')} />
        </View>
      <View style={styles.contentContainer}>
      
        <Text style={[styles.contentContainer, styles.title]}>{route.params.title}</Text>
        <Text style={styles.contentContainer}>{route.params.price}€</Text>
        <Text style={styles.contentContainer}>{route.params.date}</Text>
        <Button style={styles.contentContainer} title='Acheter' />
      </View>

      <Separator />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Description</Text>
        <Text>{route.params.description}</Text>
      </View>
      <Separator />
      <View>
        <View>
          <Text style={[styles.title, styles.contentContainer]}>Livraison</Text>
          <Text style={styles.contentContainer}>Acheter ce bien et profiter des avantages de la livraison Mondial Relay !</Text>
          <Text style={[styles.contentContainer, styles.title]}>Mondial Relay</Text>
        </View>
        <View style={styles.paiementSecureView}>
          <Text>Paiements sécurisés avec leboncoin</Text>
          <Text>Votre argent est conservé et le vendeur est payé lorsque vous confirmez la bonne réception du colis</Text>
        </View>
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>{route.params.lieu} ({route.params.codePostal})</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  contentContainer: {
    marginVertical: 10
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
    backgroundColor: 'mistyrose',
    padding: 10
  },
  image: {
    flex: 1,
    // width:400,
    // height:400,
    resizeMode:'contain'
}
});

export default DetailAnnonce;