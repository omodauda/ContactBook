import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "~types";

// Screens
import ContactsList from "~screens/ContactsList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="ContactsList"
        component={ContactsList}
      />
    </Stack.Navigator>
  )
}