import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, ListItem } from 'react-native-elements';

export default function Emotion({date, event, emotion}: {date: Date, event: string, emotion: string}) {
    const navigation = useNavigation();

    const dateString = date.toLocaleString()
    return (
    <ListItem bottomDivider onPress={() => navigation.navigate('EmotionEntry', {emotion, event, dateString})}>
        <ListItem.Content>
            <ListItem.Title>{dateString}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron></ListItem.Chevron>
    </ListItem>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 30
},
date: {
    fontSize: 20,
    fontWeight: 'bold',
}
});