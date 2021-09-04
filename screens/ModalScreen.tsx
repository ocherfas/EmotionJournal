import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

import { Text} from '../components/Themed';
import {TextInput, Button} from 'react-native'
import emotionEntries from '../data/emotion-entries'
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { useKeyboard } from '@react-native-community/hooks';
import { useLayout } from '@react-native-community/hooks';

export default function NewEntry({navigation}: NativeStackScreenProps<RootStackParamList, 'Journal'>){
  const [state, setState] = React.useState<{
    emotion: string, 
    event: string
  }>({emotion: "", event: ""});

  const submit = async () => {
    await emotionEntries.addEntry({
      event: state.event, 
      emotion: state.emotion, 
      date: new Date()
    })

    navigation.navigate('Journal');
  }

  const keyboard = useKeyboard();
  const {onLayout, ...layout} = useLayout();

  return ( 
    <View onLayout={onLayout} style={styles.screen}>
      <ScrollView style={{height: keyboard.keyboardShown ? layout.height - keyboard.keyboardHeight : layout.height}} contentContainerStyle={styles.container}>
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
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%"
  },
  container: {
    padding: 30,
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
    height: 178,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10
  }
});
