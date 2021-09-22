import React from 'react';

import {Text, StyleSheet} from 'react-native';

interface Props {
  /**
   * Control style of text from preset styles.
   */
  variant: 'header' | 'subtitle' | 'description';
}

/**
 * Text component for G&K pages. Renders text using a list of preset styles.
 */
const GKText: React.FC<Props> = ({variant, children}) => {
  // @ts-ignore
  return <Text style={styles[variant]}>{children}</Text>;
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
