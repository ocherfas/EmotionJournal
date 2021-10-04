import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { EmotionEntry, PlainEmotion } from '../data/emotion-entries';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import {remove, isEmpty, pullAt} from 'lodash'
import JournalList from '../components/JournalList';
import * as MailComposer from 'expo-mail-composer';
import * as FileSystem from 'expo-file-system';
import { Parser } from 'json2csv';

export default function JournalSelection({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'JournalSelection'>) {
  const [{selected}, setState] = React.useState<{selected: number[]}>({selected: [route.params.selected]});

  React.useEffect(() => {
    navigation.setOptions({title: `${selected.length} Selected`})
  })

  React.useLayoutEffect(() => {
      navigation.setOptions({
          headerRight: () => (
            <Button
            disabled={isEmpty(selected)}
            title="Export"
            onPress={async ()=>{
                const selectedValues = pullAt(route.params.entries, selected);
                
                const filename = FileSystem.documentDirectory+'/temp.csv'
                const csvParser = new Parser<PlainEmotion>({
                    fields: [
                        {
                            label: 'Date',
                            value: 'date'
                        },
                        {
                            label: 'Event',
                            value: 'event'
                        },
                        {
                            label: 'Emotion',
                            value: 'emotion'
                        }
                    ]
                });

                const csv = csvParser.parse(selectedValues)
                await FileSystem.writeAsStringAsync(filename, csv, {
                    encoding: 'utf8'
                })

                await MailComposer.composeAsync({
                    attachments: [filename],
                    subject: "Here are my emotions"
                })

                await FileSystem.deleteAsync(filename)
                navigation.navigate('Journal')
            }}
            />
          )
      })
  })

  const data = route.params.entries
  return (
    <View style={styles.container}> 
    <JournalList entries={data} onToggle={(index: number)=>{
          const newSelected = [...selected]
          const removed = remove(newSelected, (selectedIndex) => {
            return selectedIndex == index;
          })
          if(isEmpty(removed)){
            setState({selected: [...newSelected, index]})
          } else {
            setState({selected: newSelected})
          }

    }} selected={selected}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
