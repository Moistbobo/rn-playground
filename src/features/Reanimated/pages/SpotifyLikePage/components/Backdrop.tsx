import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, StyleSheet} from 'react-native';

/**
 * Gradient backdrop for G&K page.
 */
const Backdrop = () => {
  return (
    <LinearGradient
      colors={['#6ab0e2', '#000000']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.backdrop}
    />
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backdrop: {
    width: '100%',
    height: height * 0.71,
    backgroundColor: 'rgba(153,153,153,0.3)',
    position: 'absolute',
    top: -height * 0.25,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default Backdrop;
