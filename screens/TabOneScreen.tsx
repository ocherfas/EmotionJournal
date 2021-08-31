import * as React from 'react';
import { StyleSheet } from 'react-native';
import {  View } from '../components/Themed';
import Emotion from '../components/Emotion';
import { RootTabScreenProps } from '../types';
import { FlatList } from 'react-native-gesture-handler';

const seperatorItem = ({}) => {
  return (
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  )
}

const DATA = [
  {emotion: "emotion text",date: Date(), event: "some event"}, {}, {}, {}, {}, {}, {}, {}
]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={styles.list} data={DATA} renderItem={({item}) => (
        <Emotion {...item}/>
      )} ItemSeparatorComponent={seperatorItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  list:{
    
    paddingHorizontal: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '80%',
  },
});
