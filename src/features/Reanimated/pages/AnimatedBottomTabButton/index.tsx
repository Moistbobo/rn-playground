import React from 'react';

import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import MainButton from 'features/Reanimated/pages/AnimatedBottomTabButton/components/MainButton';
import FlashMessageWrapper from 'lib/FlashMessageWrapper';

const DummyPage = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    />
  );
};

const Tabs = createBottomTabNavigator();

const AnimatedBottomTabButton = () => {
  const onPressHandler = (idx: number) => () => {
    FlashMessageWrapper.showFlashMessage(`Pressed button ${idx + 1}`);
  };

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
        },
      }}
    >
      <Tabs.Screen name="Home" component={DummyPage} />
      <Tabs.Screen name="Cart" component={DummyPage} />
      <Tabs.Screen
        name="Center"
        component={DummyPage}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => {
            console.log(props);
            return (
              <View
                style={{
                  bottom: 48,
                }}
              >
                <MainButton
                  subButtonOnPress={[
                    onPressHandler(0),
                    onPressHandler(1),
                    onPressHandler(2),
                  ]}
                  {...props}
                  onPress={() => {}}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen name="Settings" component={DummyPage} />
      <Tabs.Screen name="Account" component={DummyPage} />
    </Tabs.Navigator>
  );
};

export default AnimatedBottomTabButton;
