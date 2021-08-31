import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Emotion from '../components/Emotion';
import { RootTabScreenProps } from '../types';
import { FAB } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment'

const seperatorItem = ({}) => {
  return (
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  )
}

const DATA = [
  {emotion: "emotion text", event: "some event", moment: moment()},
  {emotion: "emotion text", event: "some event", moment: moment().subtract(3, 'days')},
  {emotion: "emotion text", event: "some event", moment: moment().subtract(1, 'months')}
]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={styles.list} data={DATA} renderItem={({item}) => (
        <Emotion {...item}/>
      )} ItemSeparatorComponent={seperatorItem}/>
      <FAB title="+" placement="right" titleStyle={styles.buttonTitle} buttonStyle={styles.create}/>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 25
  },
  create: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30
  },
  list:{
    paddingHorizontal: 30
  },
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'flex-start',
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
