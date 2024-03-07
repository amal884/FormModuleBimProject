// src/components/GestionPart.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function Portes({ control, handleSubmit, formState: { errors } }) {

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error }}) => (
          <React.Fragment>
          <TextInput
            label="Surface de la porte"
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
        name="surfacePorte"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Pont Thermique"
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
        name="pontThermiquePorte"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error }}) => (
          <React.Fragment>
          <TextInput
            label="Positionnement de la porte"
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
        name="positionnementPorte"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Surface mur moins surface fenetre"
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
        name="surfaceMurMoinsSurfaceFenetrePorte"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Cette Porte n'est pas ***"
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
        name="cettePorteNesPas"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Details de la porte"
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
        name="detailsPorte"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Implautation de la porte"
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
        name="implautationPorte"
      />
      


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value } , fieldState: { error }}) => (
          <React.Fragment>

          <TextInput
            label="Nature de la Porte"
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
        name="naturePorte"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error }  }) => (
          <React.Fragment>
          <TextInput
            label="Dormant large >10cm"
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
        name="largeTen"
      />

      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error }  }) => (
          <React.Fragment>
          <TextInput
            label="Menuiserie avec joint d'etaucheite < 1948"
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
        name="MenuiseriJointDechau"
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Performance de la porte"
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
        
        name="performancePorte"
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
  
  