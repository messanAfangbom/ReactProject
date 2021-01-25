import React, { useState, useEffect } from 'react';
import { TextInput, Button, Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const RenderCustomizeText = (props) => {
    return (
        <Text style={{ color: 'red' }}>{props.text}</Text>
    )
}

const LoginComponent = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageEmail, setMessageEmail] = useState('');
    const [messageMdp, setMessageMdp] = useState('');
    const [shouldShow, setShouldShow] = useState(false);

    const checkdata = () => {
        if (password === 'messan' && email === 'messanafan@gmail.com') {
            navigation.navigate('DetailAnnonce', {
                title: 'ballon-algérie',
                description: 'Je vends ce ballon acheté il ya 15 jours mais jamais utilié',
                lieu: 'Bordeaux',
                codePostal: '33000',
                price: '15',
                date: 'Aujourd\'hui a 20:00'
            });
        } else {
            setMessageMdp('Votre identifiant ou votre mot de passe est incorrect');
        }
    }

    function is_Blank(input) {
        if (input.length === 0)
            return true;
        else
            return false;
    }

    function updateEmailMessage(input) {
        if (is_Blank(input.trim())) {
            setMessageEmail('Veuillez saisir une adresse email');
            setShouldShow(true);
        }
        else {
            setMessageEmail('');
            setShouldShow(false);
        }
    }
    function updatePasswordMessage(input) {
        if (is_Blank(input.trim())) {
            setMessageMdp('Veuillez saisir un mot de passe');
        } else {
            setMessageMdp('');
        }
    }

    useEffect(() => {

    })

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.componentGeneral}>
                    <View>
                        <Text style={[styles.bold, { fontSize: 20 }]} >Bonjour !</Text>
                        <Text>Connectez-vous pour découvrir toutes nos fonctionnalités.</Text>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.bold}>Email</Text>
                        <TextInput style={shouldShow ? [styles.entryStyle, { borderColor: 'red' }] : [styles.entryStyle, { borderColor: 'gray' }]}
                            value={email}
                            onChangeText={text => {
                                setEmail(text);
                                updateEmailMessage(text);
                            }} />
                        <Text style={styles.errorMessage}>{messageEmail}</Text>

                        <Text style={styles.bold}>Mot de Passe</Text>
                        <TextInput style={[styles.entryStyle, { borderColor: 'gray' }]}
                            value={password}
                            onChangeText={text => {
                                setPassword(text);
                                updatePasswordMessage(text);
                            }}></TextInput>

                        <Text style={styles.errorMessage}>{messageMdp}</Text>

                        <Text>Mot de passe oublié</Text>
                        <Button title="Se connecter"
                            onPress={checkdata}
                        />
                    </View>
                    <View style={styles.foot}>
                        <Text>Envie de nous rejoindre ? Créer un compte</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}



const styles = StyleSheet.create(
    {
        entryStyle: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 5
        },

        errorMessage:
        {
            color: 'red'
        },
        componentGeneral:
        {
            flex: 1,
            margin: 20,
            justifyContent: 'space-between'
        },
        bold:
        {
            fontWeight: 'bold'
        }
    }
)

export default LoginComponent;