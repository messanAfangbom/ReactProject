import { Item, Icon, Input, Footer, FooterTab, Button, Card, CardItem, Thumbnail, Left, Right, Body, Content } from 'native-base';
import * as  React from 'react';
import { View, Text, StyleSheet, Image } from "react-native"
import { Card as PaperCard } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'


const FavoritesAnnonces = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView >
                <View style={styles.container}>
                    {props.favoriteAnnonce.favoriteAnnonce.map(annonce => {
                        return (

                            <Card key={annonce.id} onPress={() =>
                                props.navigation.navigate('DetailAnnonce', { id: annonce.id })
                            }
                            >

                                <CardItem>
                                    <Left>
                                        <PaperCard.Cover style={styles.cardStyle} source={annonce.linkPicture}></PaperCard.Cover>
                                    </Left>

                                    <Right>
                                        <Text style={styles.title}>{annonce.title}</Text>
                                        <Text style={[styles.colorBoncoin, styles.title]}>{annonce.price ? annonce.price : null} {annonce.price ? '€' : null}</Text>
                                        <Text>{annonce.location}  ({annonce.postalCode})</Text>
                                    </Right>
                                </CardItem>

                                <CardItem >
                                    <Button transparent full style={{width:300, marginLeft:20}} > 
                                        <Icon active light type='MaterialCommunityIcons' name='android-messages' style={{color:'dodgerblue'}} />
                                        <Text style={{color:'dodgerblue'}}>Envoyer un message</Text>
                                    </Button>
                                </CardItem>
                            </Card>
                        )
                    })}
                </View>
            </ScrollView>
            <Footer >
                <FooterTab style={{ backgroundColor: 'whitesmoke' }}>
                    <Button onPress={() => props.navigation.navigate('Rechercher')}>
                        <Icon type='FontAwesome' name='search' style={styles.colorBoncoin} />
                        <Text style={styles.colorBoncoin}>Rechercher</Text>
                    </Button>
                    <Button vertical onPress={
                        () => {
                            if (!props.connexionState.connexionState) {
                                props.navigation.navigate('Login');
                            }
                        }}>
                        <Icon type='Ionicons' name="heart-outline" style={styles.colorFooter} />
                        <Text style={styles.colorFooter}>Favoris</Text>
                    </Button>
                    <Button vertical onPress={
                        () => {
                            if (!props.connexionState.connexionState) {
                                props.navigation.navigate('Login');
                            }
                        }}>
                        <Icon type='Octicons' name="diff-added" style={styles.colorFooter} />
                        <Text style={styles.colorFooter}>Publier</Text>
                    </Button>
                    <Button vertical onPress={
                        () => {
                            if (!props.connexionState.connexionState) {
                                props.navigation.navigate('Login');
                            }
                        }}>
                        <Icon active light type='MaterialCommunityIcons' name='android-messages' style={styles.colorFooter} />
                        <Text style={styles.colorFooter}>Messages</Text>
                    </Button>
                    <Button vertical onPress={
                        () => {
                            if (!props.connexionState.connexionState) {
                                props.navigation.navigate('Login');
                            }
                        }}>
                        <Icon type='AntDesign' name="user" style={styles.colorFooter} />
                        <Text style={styles.colorFooter}>Compte</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
    )
}



const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 16,
            marginVertical: 10
        },
        contentContainer: {
            marginVertical: 15
        },
        buyButton:
        {
            backgroundColor: '#C0562A'
        },
        colorBoncoin:
        {
            color: '#C0562A'
        },
        colorFooter:
        {
            color: 'gray'
        },
        title: {
            fontWeight: 'bold'
        },
        cardStyle: {
            width: 180,
            marginVertical: 20
        }
    }
)

const mapStateToProps = (state) => {
    return {
        annonces: state.favoriteAnnonce,
        connexionState: state.login,
        favoriteAnnonce: state.favoriteAnnonce
    }
}

export default connect(mapStateToProps)(FavoritesAnnonces);