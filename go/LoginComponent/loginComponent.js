import React, { useState, useEffect } from 'react';
import { TextInput, Button, Text, View, StyleSheet, Alert } from 'react-native';

const RenderCustomizeText = (props) => {
    return (
        <Text style={{color:'red'}}>{props.text}</Text>
    )
}

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shouldShow, setShouldShow] = useState('false');

    const checkdata = () => {
        if (password === 'messan' && email === 'messanafan@gmail.com') {
            Alert.alert('Identifiants sont ok');
            console.log("console");
        }
    }

    useEffect(() => {
        if (!email.trim()|| !password.trim()) {
            setShouldShow(true);
        }
        else
        {
            setShouldShow(false);
        }
    })

    return (
        <View style={styles.componentGeneral}>
            <View>
                <Text style={[styles.bold, { fontSize: 20 }]} >Bonjour !</Text>
                <Text>Connectez-vous pour découvrir toutes nos fonctionnalités.</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bold}>Email</Text>
                <TextInput style={shouldShow ? [styles.entryStyle,{borderColor:'red'}]: [styles.entryStyle,{borderColor:'gray'}]} onChangeText={text => setEmail(text)} />
                {shouldShow ? (<RenderCustomizeText text="Veuillez saisir un email" />) : null}

                <Text style={styles.bold}>Mot de Passe</Text>
                <TextInput style={shouldShow ? [styles.entryStyle,{borderColor:'red'}]: [styles.entryStyle,{borderColor:'gray'}]} value={password} onChangeText={text => setPassword(text)}></TextInput>
                {shouldShow ? (<RenderCustomizeText text="Veuillez saisir un mot de passe" />) : null}

                <Text>Mot de passe oublié</Text>
                <Button title="Se connecter"
                    onPress={checkdata} />
            </View>
            <View style={styles.foot}>
                <Text>Envie de nous rejoindre ? Créer un compte</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create(
    {
        entryStyle: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 5
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