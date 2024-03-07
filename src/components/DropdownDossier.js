import { TextInput, IconButton, List, Divider, Provider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { MaskedView } from '@react-native-masked-view/masked-view';
import { useState } from 'react';
import {StyleSheet, View, TouchableWithoutFeedback  } from 'react-native';
const DropdownDossier = ({ label, items, onValueChange, selectedValue })=>{
   // Import the TextInput styles from the theme
    // Use a controlled component approach, mimicking the TextInput behavior
    const [pickerVisible, setPickerVisible] = useState(false);

  const togglePicker = () => {
    setPickerVisible(!pickerVisible);
  };
    return (
      <TouchableWithoutFeedback onPress={togglePicker}>
      <View style={styles.textInputContainer}>
        <TextInput
          label={label}
          mode="outlined"
          editable={false}
          value={items.find(item => item.value === selectedValue)?.label || ''}
          style={styles.textInput}
        />
        {pickerVisible && (
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              togglePicker();
              onValueChange(itemValue, itemIndex);
            }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0 }}
          >
            {items.map((item) => (
              <Picker.Item label={item.label} value={item.value} key={item.value} />
            ))}
          </Picker>
        )}
      </View>
    </TouchableWithoutFeedback>
    );
  };
export default DropdownDossier;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
  },
  iconButton: {
    marginLeft: 10,
  },
});