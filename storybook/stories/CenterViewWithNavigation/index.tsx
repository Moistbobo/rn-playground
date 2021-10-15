import React from 'react';
import CenterView from "../CenterView";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { ColorValue } from "react-native";

const Stack = createStackNavigator();

type Props = {
  children: any;

  backgroundColor?: ColorValue;
}

const CenterViewWithNavigation = ({children, backgroundColor}: Props) => {
  // @ts-ignore
  const comp = () => <CenterView alignContent={'stretch'} backgroundColor={backgroundColor}>{children}</CenterView>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'main'} component={()=> children}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default CenterViewWithNavigation;
