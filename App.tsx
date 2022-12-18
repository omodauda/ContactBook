import React, { useMemo, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Screens from '~navigation';
import { FavouriteContactContext } from '~context';

const App = () => {
  const [favContact, setFavContact] = useState();

  const value = useMemo(() => ({ favContact, setFavContact}), [favContact])
  return (
    <FavouriteContactContext.Provider value={value}>
      <SafeAreaProvider>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
    </FavouriteContactContext.Provider>
  );
};

export default App;
