import React from 'react';
import MobileStoreStack from 'navigation/RootNavigator/MobileStoreStack';
import ReanimatedStack from 'navigation/RootNavigator/ReanimatedStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerButton from 'components/DrawerButton';
import Landing from 'features/Landing';

export type RootNavigatorParamList = {
  Landing: undefined;
  MobileStore: undefined;
  Reanimated: undefined;
};

const Drawer = createDrawerNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerLeftContainerStyle: {paddingLeft: 16},
        headerLeft: () => <DrawerButton tintColor="black" />,
      }}
    >
      <Drawer.Screen name="Landing" component={Landing} />
      <Drawer.Screen
        options={{headerShown: false}}
        name="MobileStore"
        component={MobileStoreStack}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Reanimated"
        component={ReanimatedStack}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
