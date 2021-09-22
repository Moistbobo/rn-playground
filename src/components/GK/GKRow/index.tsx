import React from 'react';
import {View, StyleSheet} from 'react-native';
import GKLogo from 'components/GK/GKLogo';
import Spacer from 'components/Spacer';
import GKText from 'components/GK/GKText';

interface Props {
  /**
   * Label that will be shown next to the G&K logo
   */
  label: string;
}

/**
 * A component that renders the G&K logo and a label horizontally
 */
const GKRow = ({label}: Props) => {
  return (
    <View style={styles.container}>
      <GKLogo size={25} />
      <Spacer size={8} orientation="horizontal" />
      <GKText variant="subtitle">{label}</GKText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GKRow;
