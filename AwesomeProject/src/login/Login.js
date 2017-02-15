import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../images/Octocat.png')}
          />
          <Text style={styles.title}>An app make for chatting using react native</Text>
        </View>
        <View style={styles.loginContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.8
  },
  loginContainer: {

  }
})
