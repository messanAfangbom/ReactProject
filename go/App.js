/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as  React from 'react';
import {SafeAreaView,StyleSheet, ScrollView,View,Text,StatusBar,} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Header,Colors} from 'react-native/Libraries/NewAppScreen';
import LoginComponent from './src/components/LoginComponent/loginComponent';
import Annonces from './src/components/Annonce/annonce';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import DetailAnnonce from './src/components/DetailAnnonce/detailAnnonce';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginComponent}/>
         <Stack.Screen name="Annonces" component={Annonces}/>
         <Stack.Screen name="DetailAnnonce" component={DetailAnnonce}/>
       </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
