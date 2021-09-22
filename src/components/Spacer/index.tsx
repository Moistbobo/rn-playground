import React from 'react';

import {View} from 'react-native';

type Props = {
  /**
   * Size of the space
   */
  size: number;

  /**
   * Orientation of the space
   *
   * @default vertical
   */
  orientation?: 'vertical' | 'horizontal' | 'both';
};
const Spacer = ({size, orientation}: Props) => {
  return (
    <View
      accessibilityLabel="spacer"
      style={[
        orientation === 'vertical' && {height: size},
        orientation === 'horizontal' && {width: size},
        orientation === 'both' && {height: size, width: size},
      ]}
    />
  );
};

export default Spacer;
