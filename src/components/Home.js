//React
import React, { Component } from 'react';

//React-Native
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity, Image, Alert, TextInput } from 'react-native';

//Expo
import { Components } from 'expo';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Video } from 'expo';

//React-Native-Maps
import MapView, { Marker, animateToRegion, Animated } from 'react-native-maps';

//Redux
import { connect } from 'react-redux';

//constants
import c from '../constants';

//Components
import firebase from './../../config';

//Local Authentication
import * as LocalAuthentication from 'expo-local-authentication';

//Image Picker
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

//Ionicons
import { Ionicons } from '@expo/vector-icons';

//uuid
const uuidv1 = require('uuid/v1');



class Media extends React.Component {
  constructor() {
    super()

  }

  cookieClicked = () => {
    let { dispatch } = this.props;
    const action = {
      type: c.COOKIE_COUNT
    }
    dispatch(action)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.cookieCount}</Text>
        <TouchableOpacity onPress={() => this.cookieClicked()} ><Image style={styles.image} source={require('./../assets/imgs/cookie.png')} /></TouchableOpacity>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    cookieCount: state.cookieCount,

  }
}

export default connect(mapStateToProps)(Media)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'black',
    height: '100%'
  },
  text: {
    marginTop: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: 'white'
  },
  image: {
    marginTop: '25%',
    display: 'flex'
  },
  button: {
    display: 'flex',
    width: '100%',
    height: '100%'
  }
})
