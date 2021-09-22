import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export default function CenterView({alignCenter, justifyContent, children, backgroundColor }) {
  return <View style={[style.main, {backgroundColor, alignCenter, justifyContent}]}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
  backgroundColor: 'white'
};

CenterView.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
};
