import React from 'react';
import 'react-native-gesture-handler';
import Index from 'navigation/RootNavigator';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import store from 'store/RootStore';
import {Provider} from 'react-redux';
import {useFlipper} from '@react-navigation/devtools';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
