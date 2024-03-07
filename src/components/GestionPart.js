// src/components/GestionPart.js
import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { Modal, TouchableOpacity} from 'react-native';
import { TextInput, Button, Menu, Provider,List, Colors } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
// import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';
// import DropdownTextInput from './DropdownTextInput';
// import DropdownDossier from './DropdownDossier';




export default function GestionPart({ control, handleSubmit, formState: { errors } }) {

  const [modalTop, setModalTop] = useState(0);
  const [modalLeft, setModalLeft] = useState(0);

  // const [selectedValue, setSelectedValue] = useState(null);
  // Declare state variables in the form component
  const [selectedValue, setSelectedValue] = useState('');

  const [open, setOpen] = React.useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const handleValueChange = (newValue) => setSelectedValue(newValue);

  const data = [
    { id: 1, label: 'Vente' },
    { id: 2, label: 'Location' },
    { id: 3, label: 'Neuf' },
  ];

  const selectItem = (item) => {
    setSelectedValue(item);
  };

  useEffect(() => {
    if (modalVisible) {
      // Calculate the left position of the text element
      const inputLeft = 16; // Left position of the text element

      setModalLeft(inputLeft);
    }
  }, [modalVisible]);



//   const [visible, setVisible] = useState(false);
// const [selectedValue, setSelectedValue] = useState('');

const openMenu = () => setVisible(true);
const closeMenu = () => setVisible(false);

// const selectItem = (value) => {
//   setSelectedValue(value);
//   closeMenu();
//   // Don't forget to pass this value to your form control
//   // onChange(value);
// };


const [years, setYears] = useState([]);

useEffect(() => {
  // Generate years from the current year to 60 years back
  const currentYear = new Date().getFullYear();
  const yearsArray = [];
  for (let i = currentYear; i >= currentYear - 60; i--) {
    yearsArray.push({ label: String(i), value: String(i) });
  }
  setYears(yearsArray);
}, []);

  const onSubmit = data=> console.log(data);


  useEffect(() => {
    if (modalVisible) {
      // Calculate the top position of the text element
      const inputTop = 48; // Height of the text element
      const inputMarginTop = 8; // Margin top of the text element
      const inputTotalTop = inputTop + inputMarginTop;

      setModalTop(inputTotalTop);
    }
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Adresse"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.adresse}
          />
        )}
        name="adresse"
      />
      {errors.adresse && <Text>This field is required.</Text>}
                       {/* Altitude */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Altitude"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.altitude}
          />
        )}
        name="altitude"
      />
      {errors.altitude && <Text>This field is required.</Text>}

                                   {/* Departement */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Departement"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.departement}
          />
        )}
        name="departement"
      />
      {errors.departement && <Text>This field is required.</Text>} 

                                   {/* Type d'habitation */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Type d'habitation"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={errors.habitation}
          />
        )}
        name="habitation"
      />
      {errors.habitation && <Text>This field is required.</Text>}  
{/* <Controller
        control={control}
        name="typeDossier"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
            <View style={[styles.input, { justifyContent: 'center' }]}>
  <RNPickerSelect
    onValueChange={onChange}
    items={[
      { label: 'Vente', value: 'Vente' },
      { label: 'Location', value: 'Location' },
      { label: 'Neuf', value: 'Neuf' },
    ]}
    style={{
      ...pickerSelectStyles,
      inputIOS: {
        ...pickerSelectStyles.inputIOS,
        marginTop: 8, // Adjust if necessary to vertically center
      },
      inputAndroid: {
        ...pickerSelectStyles.inputAndroid,
        marginTop: 8, // Adjust if necessary to vertically center
      },
      iconContainer: {
        top: '50%',
        right: 12,
        transform: [{ translateY: -10 }], // Adjust based on actual icon size
      },
    }}
    value={value}
    useNativeAndroidPickerStyle={false}
    placeholder={{ label: 'Type de dossier', value: null }}
  />
</View>
        )}
      />
     {errors.typeDossier && <Text style={styles.errorText}>This field is required.</Text>} */}


{/* <View>
      <DropdownTextInput
        label="Type de dossier"
        value={selectedValue}
        data={data}
        onSelect={selectItem}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>  */}
{/* <View>
      <DropdownTextInput
        label="Type de dossier"
        value={selectedValue}
        data={data}
        onSelect={selectItem}
      />
    </View> */}


{/* <View >
      <Controller
        control={control}
        name="typeDossier"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={{ justifyContent: 'center', marginTop: 8 }}>
            <DropDownPicker
              open={open}
              setOpen={setOpen}
              items={[
                { label: 'Vente', value: 'Vente' },
                { label: 'Location', value: 'Location' },
                { label: 'Neuf', value: 'Neuf' },
              ]}
              defaultValue={value}
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: '#fafafa' }}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
              onChangeItem={item => onChange(item.value)}
              placeholder="Type de dossier"
            />
          </View>
        )}
      />
      {errors.typeDossier && <Text>This field is required.</Text>}
    </View> */}

<View>
      <Controller
        control={control}
        name="typeDossier"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ justifyContent: 'center', marginTop: 8 }}
            >
              <Text style={{ 
                borderWidth: 1, 
                borderColor: '#ccc', 
                borderRadius: 4, 
                padding: 10,
                backgroundColor: '#fff',
                height: 48,
                textAlignVertical: 'center',
                paddingHorizontal: 16,
                textAlign: 'left',
                minWidth: 100,
                margin: 0,
                fontFamily: 'System',
                letterSpacing: 0.15,
                fontSize: 16,
                color: '#1c1b1fff',
                backgroundColor: 'transparent'

              }}>{value || 'Type de dossier'} {'\u25BE'}</Text>
            </TouchableOpacity>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => setModalVisible(false)}
                />
                <View style={[styles.dropdownContainer, { top: 422+ modalTop, left:22+ modalLeft ,right:39} ]}>
                  <DropDownPicker
                    open={modalVisible}
                    value={value}
                    items={[
                      { label: 'Vente', value: 'Vente' },
                      { label: 'Location', value: 'Location' },
                      { label: 'Neuf', value: 'Neuf' },
                    ]}
                    setOpen={setModalVisible}
                    setValue={onChange}
                    onClose={() => setModalVisible(false)}
                    placeholder="Choisir le type de dossier"
                    placeholderStyle={{
                      color: '#1c1b1fff',
                      fontSize: 16,
                      fontFamily: 'System',
                      textAlign: 'left'
                    }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{ justifyContent: 'center' }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    dropDownContainerStyle={{ width: '100%' }}
                  />
                </View>
              </View>
            </Modal>
          </>
        )}
      />
      {errors.typeDossier && <Text>This field is required.</Text>}
    </View>

    {/* <View>
      <Controller
        control={control}
        name="year"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ justifyContent: 'center', marginTop: 20 }}
            >
              <Text style={{ 
                borderWidth: 1, 
                borderColor: '#ccc', 
                borderRadius: 4, 
                padding: 10,
                backgroundColor: '#fff',
                height: 48,
                textAlignVertical: 'center',
                paddingHorizontal: 16,
                textAlign: 'left',
                minWidth: 100,
                margin: 0,
                fontFamily: 'System',
                letterSpacing: 0.15,
                fontSize: 16,
                color: '#1c1b1fff',
                backgroundColor: 'transparent'

              }}>{value || 'Choisir une année'} {'\u25BE'}</Text>
            </TouchableOpacity>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => setModalVisible(false)}
                />
                <View style={[styles.dropdownContainer, { top: modalTop, left: modalLeft }]}>
                  <DropDownPicker
                    open={modalVisible}
                    value={value}
                    items={years}
                    setOpen={setModalVisible}
                    setValue={onChange}
                    onClose={() => setModalVisible(false)}
                    placeholder="Choisir une année"
                    placeholderStyle={{
                      color: '#1c1b1fff',
                      fontSize: 16,
                      fontFamily: 'System',
                      textAlign: 'left'
                    }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{ justifyContent: 'center' }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    dropDownContainerStyle={{ width: '100%' }}
                  />
                </View>
              </View>
            </Modal>
          </>
        )}
      />
      {errors.year && <Text>This field is required.</Text>}
    </View> */}


     
    </View>



  );

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'transparent'
  },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginBottom: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    dropdownContainer: {
      backgroundColor: 'white',
      padding: 0,
      position: 'absolute',
      zIndex: 999,
    },
  });
  
  // Customize the appearance of the picker
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4, // match the TextInput border radius
      color: 'black',
      paddingRight: 30, // To ensure the text is never behind the icon
      backgroundColor: 'white', // or any color that matches your TextInput
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4, // match the TextInput border radius
      color: 'black',
      paddingRight: 30, // To ensure the text is never behind the icon
      backgroundColor: 'white', // or any color that matches your TextInput
    },
    placeholder: {
      color: 'grey', // Adjust the placeholder text color if necessary
    },
   
    // add any other styles that you think necessary to match the appearance
  });
  