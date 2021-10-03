import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

export default function EmotionEntry({ route }: NativeStackScreenProps<RootStackParamList, 'EmotionEntry'>) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Event:</Text>
        <Text style={styles.text}>{route.params.event}</Text>
        <Text style={styles.title}>Emotion:</Text>
        <Text style={styles.text}>{route.params.emotion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
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
