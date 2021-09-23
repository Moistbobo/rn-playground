import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {gkLogo} from 'assets/images';

interface Props {
  /**
   * Size of the logo
   * @default 50
   */
  size?: number;
}

/**
 * A component that renders a circular G&K Logo
 */
const GKLogo = ({size}: Props) => {
  return (
    <Image
      source={gkLogo}
      style={[
        styles.gkLogo,
        // @ts-ignore
        size && {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  gkLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25,
    backgroundColor: 'black',
    padding: 8,
  },
});

export default GKLogo;
