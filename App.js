import React, {Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { createStackNavigator, createAppContainer, navigationOptions } from "react-navigation";
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
import { combineReducers } from 'redux';

import rootReducer from './src/reducers/index.js';

//Components
import Home from './src/components/Home';


const AppNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
  initialRouteName: 'Home',
  headerMode: 'none',
  },
);
const AppContainer = createAppContainer(AppNavigator);


const store = createStore(rootReducer);

const state = store.getState();

export default class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
