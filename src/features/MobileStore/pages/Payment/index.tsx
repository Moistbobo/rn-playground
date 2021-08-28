import React from 'react';
import AppConfig, {AppConfigEnum} from 'config/AppConfig';
import {ScrollView, Text} from 'react-native';

const Payment = () => {
  return (
    <ScrollView>
      <Text>{AppConfig.get(AppConfigEnum.stripePK)}</Text>
    </ScrollView>
  );
};

export default Payment;
