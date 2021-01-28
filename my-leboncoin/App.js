/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as  React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import LoginComponent from './src/components/LoginComponent/loginComponent';
import Annonces from './src/components/Annonce/annonce';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DetailAnnonce from './src/components/DetailAnnonce/detailAnnonce';
import Store from './src/store/configureStore'
import { Provider } from 'react-redux';
import SearchComponent from './src/components/search/searchComponent';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

export default function App() {

  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true);
  })

  return (
    <SafeAreaProvider>
      { !isReady && <AppLoading></AppLoading>}
      {isReady &&
        <Provider store={Store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Annonces" component={Annonces} />
              <Stack.Screen name="Login" component={LoginComponent} />
              <Stack.Screen name="DetailAnnonce" component={DetailAnnonce} />
              <Stack.Screen name="Rechercher" component={SearchComponent} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      }
      </SafeAreaProvider>
  );
}
