// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function Plancher({ control, handleSubmit, formState: { errors } }) {

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Surface"
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
        name="surface"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Plancher donne sur quoi"
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
        name="plancherDonneSurQuoi"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error }}) => (
          <React.Fragment>
          <TextInput
            label="Type de Plancher"
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
        name="typePlancher"
      />

      
    </View>
  );
}

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
  
  