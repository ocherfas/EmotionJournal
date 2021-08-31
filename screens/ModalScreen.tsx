import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {TextInput} from 'react-native'

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event:</Text>
      <TextInput style={styles.input} multiline/>
      <Text style={styles.title}>Emotion:</Text>
      <TextInput multiline style={styles.input}/>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
  }
});
