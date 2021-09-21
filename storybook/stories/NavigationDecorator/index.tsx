import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const NavigationDecorator: React.FC = ({children}) => {
  return (<NavigationContainer>
    {children}
  </NavigationContainer>);
};

export default NavigationDecorator;
