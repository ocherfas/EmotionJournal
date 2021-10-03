import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import NewEntry from './screens/ModalScreen';
import Journal from './screens/Journal';
import EmotionEntry from './screens/EmotionEntry';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Journal" component={Journal}></Stack.Screen>
            <Stack.Screen name="NewEntry" component={NewEntry} options={{title: "New Entry"}}/>
            <Stack.Screen name="EmotionEntry" component={EmotionEntry} options={({route}) => ({title: (route.params as any).dateString })}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
