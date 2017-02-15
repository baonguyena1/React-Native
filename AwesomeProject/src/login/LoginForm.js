import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Username or email'
          style={styles.input}
           />
        <TextInput
          placeholder='Password'
          secureTextEntry
          style={styles.input}
         />
         <TouchableOpacity style={styles.loginContainer}>
          <Text style={styles.loginText}>LOGIN</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10,
  },
  loginContainer: {
    backgroundColor: '#2980b9',
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 40
  },
  loginText: {
    color: '#fff',
    textAlign: 'center'
  }
})
