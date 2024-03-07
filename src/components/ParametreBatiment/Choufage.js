// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const Choufage = ({ control, handleSubmit, formState: { errors } })=> {
 return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Nature de l'installation"
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
        name="natureInstallation"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Nembre d'installation identique pour les meubles complets"
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
        name="NembreInstallationIdentiq"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Equipement d'interuitance"
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
        name="equipementInteruitance"
      />
      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Generateur"
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
        name="generateur"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error }}) => (
          <React.Fragment>
          <TextInput
            label="Annee d'installation du generateur"
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
        name="anneeInstallationGenerateur"
      />
    </View>
  );
};
export default Choufage;

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
  
  