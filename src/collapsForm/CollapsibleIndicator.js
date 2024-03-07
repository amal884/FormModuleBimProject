import React from 'react';
import { View, TouchableOpacity, Text, Animated, Easing } from 'react-native';
// import { MaterialIcons } from 'react-native-vector-icons';
//  import { MaterialIcons } from '@expo/vector-icons';
import CollapsedState from './CollapsedState';

const CollapsibleIndicator = ({ onPress, collapsed }) => {
  console.log('collapsed', collapsed);

  return (
    <TouchableOpacity onPress={() => {onPress()}}>
      <CollapsedState collapsed={collapsed} /> 
   </TouchableOpacity>
  );
};
export default CollapsibleIndicator;
