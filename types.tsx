/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EmotionEntry, PlainEmotion } from './data/emotion-entries';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Journal: undefined;
  NewEntry: undefined;
  NotFound: undefined;
  EmotionEntry: {
    date: string, 
    event: string, 
    emotion: string
  };
  JournalSelection: {
    entries: PlainEmotion[],
    selected: number
  }
};
