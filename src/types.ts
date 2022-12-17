import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Contact } from '~intefaces/Contact';

export type RootStackParamList = {
  ContactsList: undefined;
  Contact: { contact: Contact };
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;