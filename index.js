import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry //Used to ensure JS execution environment is setup
} from 'react-native';

class ReactCalculator extends Component {

  render() {
    return ( //Creates container View that wraps two sections and takes full width and height
      <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: '#193441'}}></View>
        <View style={{flex: 8, backgroundColor: '#3E606F'}}></View>
      </View>
    )
  }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator); //For app root components to register themselves for system to load the bundle for the app
