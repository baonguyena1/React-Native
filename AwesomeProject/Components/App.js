import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstView} />
        <View style={styles.secondView} />
        <View style={styles.thridView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  firstView: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  secondView: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  thridView: {
    flex: 3,
    backgroundColor: 'steelblue'
  }
});
