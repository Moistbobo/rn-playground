import React from 'react';
import {storiesOf} from '@storybook/react-native';
import BackButton from 'components/BackButton/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CenterView from '../../../storybook/stories/CenterView';

const Stack = createStackNavigator();

storiesOf('components', module)
  .addDecorator(getStories => {
    const comp = () => (
      <CenterView backgroundColor="gray">{getStories()}</CenterView>
    );

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="main" component={comp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  })
  .add('BackButton', () => <BackButton />);
