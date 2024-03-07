// src/AccordionSection.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import CollapsibleIndicator from '../collapsForm/CollapsibleIndicator'; // Import your CollapsibleIndicator component

const AccordionSection = ({ title, children, titleStyle  }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCollapsed(!collapsed)}
        style={styles.titleContainer}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <CollapsibleIndicator
          onPress={() => setCollapsed(!collapsed)}
          collapsed={collapsed}
          style={{ marginRight: 10 }} 
        />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        {children}
      </Collapsible>
    </View>
  );
};
export default AccordionSection;

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Make title and indicator appear in a row
    alignItems: 'center', // Center items vertically
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
  },
  // You can define default styles for the title here if you like
});
