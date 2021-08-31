import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function Emotion({date, event, emotion}: {date: Date, event: string, emotion: string}) {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>Event:</Text>
        <Text style={styles.text}>{event}</Text>
        <Text style={styles.title}>Emotion:</Text>
        <Text style={styles.text}>{emotion}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginVertical: 30,
},
date: {
    fontSize: 30,
    fontWeight: 'bold',
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
},
text: {
    fontSize: 20,
    fontWeight: 'normal',
},
});