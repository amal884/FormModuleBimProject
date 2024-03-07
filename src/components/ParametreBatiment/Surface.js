// src/components/GestionPart.js
import React , { useEffect }  from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function Surface({ control, handleSubmit, formState: { errors } }) {
  const [surfaceHabitable, setSurfaceHabitable] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // Read data from room.json
    const jsonContent = require('../../jsonFiles/sortie.json');
    console.log(jsonContent);
    const initialValue = Number(jsonContent.floors[0].dimensions[0] * jsonContent.floors[0].dimensions[1]).toFixed(2);
    console.log(initialValue);
     setSurfaceHabitable(initialValue);
     
     setLoading(false);
    
  }, []);

  if (loading) {
    return null; // or a loading indicator
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        name="surfaceHabitable"
        defaultValue={surfaceHabitable}
        render={({ field: { onChange, onBlur, value },fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Surface Habitable"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            error={!!error} 
          />
            {/* Display the error message below the TextInput */}
            {error && <Text style={styles.errorText}>{error.message}</Text>}
              
          </React.Fragment>
        )}
        
      />


      <Controller
        control={control}
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <React.Fragment>
          <TextInput
            label="Hauteur Moyenne sans Plafand"
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
        name="HauteurMoyenneSansPlafand"
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
  
  