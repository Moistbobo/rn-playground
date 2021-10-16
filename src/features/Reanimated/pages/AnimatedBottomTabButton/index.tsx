import React from 'react';

import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import BottomTabButton from 'features/Reanimated/pages/AnimatedBottomTabButton/components/BottomTabButton';
import FlashMessageWrapper from 'lib/FlashMessageWrapper';
import {dollarSign, mdr1, minus, plus} from 'assets/images';
import SpotifyLikePage from 'features/Reanimated/pages/SpotifyLikePage';
import BackButton from 'components/BackButton';
import LoadingPage from 'components/LoadingPage';

const Tabs = createBottomTabNavigator();

const AnimatedBottomTabButton = () => {
  const onPressHandler = (idx: number) => () => {
    FlashMessageWrapper.showFlashMessage(`Pressed button ${idx + 1}`);
  };

  return (
    <Tabs.Navigator
      screenOptions={{
        headerLeft: () => <BackButton />,
      }}
    >
      <Tabs.Screen name="Placeholder1" component={LoadingPage} />
      <Tabs.Screen name="Placeholder2" component={LoadingPage} />
      <Tabs.Screen
        name="Center"
        component={SpotifyLikePage}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => {
            console.log(props);
            return (
              <View
                style={{
                  bottom: 48,
                }}
              >
                <BottomTabButton
                  mainButton={{
                    image: plus,
                    backgroundColor: 'green',
                    onPress: () => {},
                  }}
                  subButtons={[
                    {
                      image: minus,
                      backgroundColor: 'blue',
                      onPress: onPressHandler(0),
                    },
                    {
                      image: mdr1,
                      backgroundColor: 'pink',
                      onPress: onPressHandler(1),
                    },
                    {
                      image: dollarSign,
                      backgroundColor: 'purple',
                      onPress: onPressHandler(2),
                    },
                  ]}
                  {...props}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen name="Placeholder3" component={LoadingPage} />
      <Tabs.Screen name="Placeholder4" component={LoadingPage} />
    </Tabs.Navigator>
  );
};

export default AnimatedBottomTabButton;
