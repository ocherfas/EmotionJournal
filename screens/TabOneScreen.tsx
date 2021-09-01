import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
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
]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList ListEmptyComponent={() => (<Text style={styles.emptyText}>No emotion entries yet.</Text>)} contentContainerStyle={styles.list} data={DATA} renderItem={({item}) => (
        <Emotion {...item}/>
      )} ItemSeparatorComponent={seperatorItem}/>
      <FAB title="+" placement="right" titleStyle={styles.buttonTitle} buttonStyle={styles.create}
        onPress={() => navigation.navigate('Modal')}/>
    </View>
  );
}

const margin = 30;
const styles = StyleSheet.create({
  emptyText: {
    fontSize: 25
  },
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
    padding: margin
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
    marginVertical: margin,
    height: 1,
    width: '80%',
  },
});
