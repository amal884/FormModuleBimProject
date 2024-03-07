// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function Mur({ control, handleSubmit, formState: { errors } }) {

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error }}) => (
          <React.Fragment>
          <TextInput
            label="Type de Mur"
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
        name="typeMur"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Surface du Mur"
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
        name="surfaceMur"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }  , fieldState: { error }}) => (
          <React.Fragment>
          <TextInput
            label="Orientation"
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
        name="orientation"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
         <React.Fragment>
          <TextInput
            label="Epeisseur"
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
        name="epeisseur"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Isolation Automatique Avec le Choix du Mur"
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
        name="isolationAutomatiqueAvecMur"
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
  
  