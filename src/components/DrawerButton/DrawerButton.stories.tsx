import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import DrawerButton from 'components/DrawerButton/index';
import NavigationDecorator from 'storybook/stories/NavigationDecorator';

const Drawer = createDrawerNavigator();

storiesOf('component', module)
  .addDecorator(getStories => (
    <NavigationDecorator>{getStories()}</NavigationDecorator>
  ))
  .add('DrawerButton', () => (
    <Drawer.Navigator>
      <Drawer.Screen
        name="main"
        component={() => (
          <CenterView>
            <DrawerButton tintColor="black" />
          </CenterView>
        )}
      />
    </Drawer.Navigator>
  ));
