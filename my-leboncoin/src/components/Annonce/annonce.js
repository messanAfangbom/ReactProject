import { Item, Icon, Input, Footer, FooterTab, Button } from 'native-base';
import * as  React from 'react';
import { View, Text, StyleSheet } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux'


const Annonces = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView >
                <View style={[styles.container]}>
                    <Button large style={{ display: 'flex', flex: 1, borderRadius: 5, backgroundColor: 'white' }}
                        onPress={() => props.navigation.navigate('Rechercher')} >
                        <Icon type='EvilIcons' style={styles.colorFooter} active name='search' />
                        <Text style={[styles.colorFooter, styles.title, { fontSize: 15 }]}>Rechercher sur le  boncoin</Text>
                        <Icon type='Ionicons' style={styles.colorFooter} name='locate-outline' />
                    </Button>
                </View>
                <View style={styles.container}>
                    {props.annonces.map(annonce => {
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
                            if (!props.connexionState) {
                                props.navigation.navigate('Login');
                            }
                        }}>
                        <Icon type='Ionicons' name="heart-outline" style={styles.colorFooter} />
                        <Text style={styles.colorFooter}>Favoris</Text>
                    </Button>
                    <Button vertical nPress={
                        () => {
                            if (!props.connexionState) {
                                props.navigation.navigate('Login');
                            }
                        }}>
                        <Icon type='Octicons' name="diff-added" style={styles.colorFooter} />
                        <Text style={styles.colorFooter}>Publier</Text>
                    </Button>
                    <Button vertical nPress={
                        () => {
                            if (!props.connexionState) {
                                props.navigation.navigate('Login');
                            }
                        }}>
                        <Icon active light type='MaterialCommunityIcons' name='android-messages' style={styles.colorFooter} />
                        <Text style={styles.colorFooter}>Messages</Text>
                    </Button>
                    <Button vertical onPress={
                        () => {
                            if (!props.connexionState) {
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
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
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
        annonces: state.annonces,
        connexionState: state.connexionState
    }
}

export default connect(mapStateToProps)(Annonces);