import React from 'react';
import PanningScrollWithReactiveBackground from 'features/Reanimated/pages/PanningScrollWithReactiveBackground';
import SpotifyLikePage from 'features/Reanimated/pages/SpotifyLikePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReanimatedLanding from 'features/Reanimated/pages/ReanimatedLanding';
import DrawerButton from 'components/DrawerButton';
import MoxLikeScrollView from 'features/Reanimated/pages/MoxLikeScrollView';
import AnimatedBottomTabs from 'features/Reanimated/pages/AnimatedBottomTabs';

export type ReanimatedStackParamList = {
  Landing: undefined;

  MoxLikeScrollView: undefined;

  ReactiveBGScrollview: undefined;

  SpotifyLikePage: undefined;

  AnimatedBottomTabs: undefined;
};

const Stack = createNativeStackNavigator<ReanimatedStackParamList>();

const ReanimatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => <DrawerButton tintColor="black" />,
        }}
        name="Landing"
        component={ReanimatedLanding}
      />

      <Stack.Screen
        name="ReactiveBGScrollview"
        component={PanningScrollWithReactiveBackground}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SpotifyLikePage"
        component={SpotifyLikePage}
      />

      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="MoxLikeScrollView"
        component={MoxLikeScrollView}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AnimatedBottomTabs"
        component={AnimatedBottomTabs}
      />
    </Stack.Navigator>
  );
};

export default ReanimatedStack;
