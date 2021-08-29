import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export default function CenterView({ children, backgroundColor }) {
  return <View style={[style.main, {backgroundColor}]}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
  backgroundColor: 'white'
};

CenterView.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
};
