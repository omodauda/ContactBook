import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ContactsList: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;