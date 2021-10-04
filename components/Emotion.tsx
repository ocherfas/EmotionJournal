import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, ListItem } from 'react-native-elements';

export default function Emotion({date, event, emotion, selected, onToggle}: 
    {
        date: string, 
        selected: boolean, 
        event: string, 
        emotion: string, 
        onToggle: () => void
    }) {
    const navigation = useNavigation();

    return (
    <ListItem bottomDivider onLongPress={onToggle} onPress={() => navigation.navigate('EmotionEntry', {emotion, event, date})}>
        <Icon type="material" reverse name={selected ? "done" : "description"} onPress={onToggle}/>
        <ListItem.Content >
            <ListItem.Title>{date}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={30}></ListItem.Chevron>
    </ListItem>
    );
}

const styles = StyleSheet.create({});