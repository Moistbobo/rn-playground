import React from 'react';
import 'react-native-gesture-handler';
import Index from 'navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
};

export default App;
