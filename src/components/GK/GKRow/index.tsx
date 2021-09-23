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

  /**
   * The size of the icon.
   * @default 25
   */
  iconSize?: number;
}

/**
 * A component that renders the G&K logo and a label horizontally
 */
const GKRow = ({label, iconSize = 25}: Props) => {
  return (
    <View style={styles.container}>
      <GKLogo size={iconSize} />
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
