// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const ProductionElectricite=  ({ control, handleSubmit, formState: { errors } }) =>{

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Type d'installation"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={!!error} 
          />
           {error && <Text style={styles.errorText}>{error.message}</Text>}
          </React.Fragment>
        )}
        name="typeInstallation"
      />
     


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Puissance Produite par kw/an"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={!!error} 
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}

          </React.Fragment>
        )}
        name="puissanceProduite"
      />
    </View>
  );
}
export default ProductionElectricite;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginBottom: 10,
    },
  });
  
  