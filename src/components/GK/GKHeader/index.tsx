import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  /**
   * The text to be rendered
   */
  children: string;
}

/**
 * Header styled text for G&K pages
 */
const GKHeader = ({children}: Props) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default GKHeader;
