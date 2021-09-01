import { Moment } from 'moment';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function Emotion({moment, event, emotion}: {moment: Moment, event: string, emotion: string}) {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{moment.calendar()}</Text>
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
},
date: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
},
text: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'normal',
},
});