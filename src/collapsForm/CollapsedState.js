import React from 'react';
import { View, StyleSheet } from 'react-native';

const CollapsedState = ({ collapsed }) => {
  const arrowStyle = {
    borderTopWidth: 10,
    borderRightWidth: 5,
    borderBottomWidth: 0,
    borderLeftWidth: 5,
    borderTopColor: 'black',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: collapsed ? '0deg' : '180deg' }],
  };
  console.log('collapsed', collapsed);  

  return <View style={[styles.arrow, arrowStyle]} />;
};

const styles = StyleSheet.create({
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
  },
});
export default CollapsedState;





