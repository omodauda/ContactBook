import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.screen}>
      <Text>ContactBook</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 }
});

export default App;
