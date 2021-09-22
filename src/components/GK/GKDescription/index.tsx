import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  /**
   * The text to be rendered
   */
  children: string;
}

/**
 * Description styled text for G&K pages
 */
const GKDescription = ({children}: Props) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    color: 'rgb(153,153,153)',
    fontSize: 12,
  },
});

export default GKDescription;
