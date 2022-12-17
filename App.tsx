import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>ContactBook</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'GeneralSans-Bold',
  },
});

export default App;
