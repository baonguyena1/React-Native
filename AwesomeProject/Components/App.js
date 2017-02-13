import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <View style={styles.firstView} />
      //   <View style={styles.secondView} />
      //   <View style={styles.thridView} />
      // </View>
      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'row'
      }}>
        <View style = {{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style = {{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style = {{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  firstView: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  secondView: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  thridView: {
    flex: 1,
    backgroundColor: 'steelblue'
  }
});
