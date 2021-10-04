import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import { FAB, Icon } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native';
import emotionEntries, { getPlainEmotion, PlainEmotion } from '../data/emotion-entries';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import JournalList from '../components/JournalList';

export default function Journal({ navigation }: NativeStackScreenProps<RootStackParamList, 'Journal'>) {
  const [{data}, setState] = React.useState<{data: PlainEmotion[]}>({data:[]});

  useFocusEffect(React.useCallback(() => {
    emotionEntries.getEntries().then((entries) => {
      setState({data: entries.map(emotion => getPlainEmotion(emotion))})
    })
  }, []))

  return (
    <View style={styles.container}> 
      <JournalList entries={data} onToggle={(index)=>{
        navigation.navigate('JournalSelection', {selected: index, entries: data})
      }} selected={[]}/>
      <FAB icon={<Icon color="white" type="material" name="add"/>} placement="right" buttonStyle={styles.create}
        onPress={() => navigation.navigate('NewEntry')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  create: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30
  },
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
