import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Text, View} from '../components/Themed';
import {TextInput, Button} from 'react-native'
import emotionEntries from '../data/emotion-entries'
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function NewEntry({navigation}: NativeStackScreenProps<RootStackParamList, 'Journal'>){
  const [state, setState] = React.useState<{emotion: string, event: string}>({emotion: "", event: ""});

  const submit = async () => {
    await emotionEntries.addEntry({
      event: state.event, 
      emotion: state.emotion, 
      date: new Date()
    })

    navigation.navigate('Journal');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event:</Text>
      <TextInput 
        textAlignVertical="top"
        style={styles.input} 
        multiline
        numberOfLines={10} 
        value={state.event} 
        onChangeText={(text) => {setState({...state, event: text})}}/>
      <Text style={styles.title}>Emotion:</Text>
      <TextInput multiline style={styles.input} 
        textAlignVertical="top"
        numberOfLines={10}
        value={state.emotion}
        onChangeText={(text) => {setState({...state, emotion: text})}} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <Button title={"submit"} onPress={submit}/>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    padding: 5,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10
  }
});
