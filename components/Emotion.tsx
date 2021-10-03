import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';

export default function Emotion({date, event, emotion}: {date: Date, event: string, emotion: string}) {
    const navigation = useNavigation();
    const dateString = date.toLocaleString()
    return (
    <Pressable onPress={() => {
        navigation.navigate('EmotionEntry', {emotion, event, dateString})
    }}>
        <View style={styles.container}>
            <Text style={styles.date}>{dateString}</Text>
        </View>
    </Pressable>
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