// DropdownTextInput.js
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity,StyleSheet  } from 'react-native';
import { TextInput, List, Colors } from 'react-native-paper';
import Modal from 'react-native-modal';

const DropdownTextInput = ({ label, value = {}, data, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { onSelect(item); toggleModal(); }}>
        <List.Item title={item.label} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TextInput
        label={label}
        value={value && value.label ? value.label : ''}
        mode="outlined"
       style={{ backgroundColor: 'transparent', marginBottom: 10 }}
        right={<TextInput.Icon name="menu-down" />}
        onTouchStart={toggleModal}
        editable={false}
      />
      {isVisible && (
        <View style={styles.modalContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <List.Item title="" style={styles.separator} />}
          />
        </View>
      )}
    </View>
  );
};
export default DropdownTextInput;

const styles = StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
      marginHorizontal: 20,
      marginTop: 20,
      elevation: 5, // Optional: add elevation for a shadow effect
    },
    separator: {
      height: 0.5,
      backgroundColor: '#E0E0E0',
    },
  });
