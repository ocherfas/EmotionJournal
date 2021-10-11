import * as React from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { StatusBar } from 'expo-status-bar';
import { useLayout } from '@react-native-community/hooks';

export default function EmotionEntry({ route }: NativeStackScreenProps<RootStackParamList, 'EmotionEntry'>) {
    const {onLayout, ...layout} = useLayout();

  return (
    <View onLayout={onLayout} style={styles.screen}>
        <ScrollView contentContainerStyle={styles.container} style={{height: layout.height}}>
            <Text style={styles.title}>Event:</Text>
            <Text style={styles.text}>{route.params.event}</Text>
            <Text style={styles.title}>Emotion:</Text>
            <Text style={styles.text}>{route.params.emotion}</Text>
        </ScrollView>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%"
      },
    container: {
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
