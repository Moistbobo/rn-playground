import React from 'react';

import {Text, StyleSheet, AccessibilityProps} from 'react-native';

interface Props extends AccessibilityProps {
  /**
   * Control style of text from preset styles.
   */
  variant: 'header' | 'subtitle' | 'description';

  /**
   * Text to render.
   */
  children: string;
}

/**
 * Text component for G&K pages. Renders text using a list of preset styles.
 */
const GKText = ({variant, children, ...rest}: Props) => {
  // @ts-ignore
  return (
    <Text {...rest} style={styles[variant]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    color: 'rgb(153,153,153)',
    fontSize: 12,
  },
});

export default GKText;
