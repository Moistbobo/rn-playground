import React from 'react';
import {View, StyleSheet, ActivityIndicator, ColorValue} from 'react-native';

interface Props {
  /**
   * The background color of the loading page
   * @default undefined/transparent
   */
  backgroundColor?: ColorValue;

  /**
   * The color of the loading spinner.
   * @default orange
   */
  spinnerColor?: ColorValue;
}

/**
 * A page that shows a centered loading spinner
 */
const LoadingPage = ({backgroundColor, spinnerColor = 'orange'}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <ActivityIndicator color={spinnerColor} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingPage;
