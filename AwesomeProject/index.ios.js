/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import Splash from './src/Splash';

export default class AwesomeProject extends Component {
  render() {
    return (
      <Splash />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
