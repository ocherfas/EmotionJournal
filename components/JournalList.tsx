import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { PlainEmotion } from '../data/emotion-entries';
import { FlatList } from 'react-native-gesture-handler';
import Emotion from './Emotion';

export default function JournalList({entries, selected, onToggle}: 
    {
        entries: PlainEmotion[],
        selected: number[],
        onToggle: (index: number) => void
    }) {
    
    return (
    <FlatList keyExtractor={(item)=> item.key+''} ListEmptyComponent={() => (<Text style={styles.emptyText}>No emotion entries yet.</Text>)} data={entries} renderItem={({index, item}) => (
        <Emotion selected={selected.includes(index)} id={item.key} {...item} onToggle={()=>{
            onToggle(index);
        }}/>
        )} />
    );
}

const styles = StyleSheet.create({
    emptyText: {
        fontSize: 25
      },
});