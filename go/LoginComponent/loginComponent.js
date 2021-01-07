import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';


const LoginComponent = () => {
    const [email, setEmail] = useState('Votre username');
    const [password, setPassword] = useState('Votre password');

    return (
        <View >
            <View>
                <Text style={[styles.bold, { fontSize: 20 }]} >Bonjour !</Text>
                <Text>Connectez-vous pour découvrir toutes nos fonctionnalités.</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bold}>Email</Text>
                <TextInput style={styles.entryStyle} />

                <Text style={styles.bold}>Mot de Passe</Text>
                <TextInput style={styles.entryStyle}></TextInput>

                <Text>Mot de passe oublié</Text>
                <Button title="Se connecter" />
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
            borderColor: 'black',
            borderWidth: 1
        },
        bold:
        {
            fontWeight: 'bold',
        },
    }
)

export default LoginComponent;