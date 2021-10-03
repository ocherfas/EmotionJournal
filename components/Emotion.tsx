import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, ListItem } from 'react-native-elements';

export default function Emotion({date, event, emotion, onToggle}: {date: Date, event: string, emotion: string, onToggle: () => void}) {
    const navigation = useNavigation();

    const dateString = date.toLocaleString()
    return (
    <ListItem bottomDivider onPress={() => navigation.navigate('EmotionEntry', {emotion, event, dateString})}>
        <Icon type="material" reverse name="description"/>
        <ListItem.Content>
            <ListItem.Title>{dateString}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron></ListItem.Chevron>
    </ListItem>
    );
}

const styles = StyleSheet.create({});