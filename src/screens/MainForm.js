// screens/MainForm.js
import React , { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Alert, Text, Linking} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import GestionPart from '../components/GestionPart';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';

// import {PermissionsAndroid} from 'react-native';
// import RNFetchBlob from 'react-native-blob-util';
// import Share from 'react-native-share';
import AccordionSection from '../collapsForm/AccordionSection'; // Adjust the path as necessary
import Surface from '../components/ParametreBatiment/Surface';
import Mur from '../components/ParametreBatiment/Mur';
import Plafand from '../components/ParametreBatiment/Plafond';
import Plancher from '../components/ParametreBatiment/Plancher';
import FenetreOrientation from '../components/ParametreBatiment/FenetreOrientation';
import FenetreDescription from '../components/ParametreBatiment/FenetreDescription';
import Portes from '../components/ParametreBatiment/Portes';
import Choufage from '../components/ParametreBatiment/Choufage';
import ProductionElectricite from '../components/ParametreBatiment/ProductionElectricite';


// import RNFS from 'react-native-fs';
// import FileViewer from 'react-native-file-viewer';

export default function MainForm() {

  
  // Initialize useForm hook here
  const { control, handleSubmit, formState } = useForm({
    mode: 'onBlur', // This triggers validation on blur
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const onSubmit = async (formData) => {
    try {
     const response = await fetch('http://10.2.49.11:3000/submit-form', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     });
 
     if (!response.ok) {
       throw new Error('Server responded with ' + response.status);
     }
 
     const result = await response.json();
 
     Alert.alert(
       "Form submitted successfully!",
       "Do you want to download your report?",
       [
         { text: "Cancel", style: "cancel" },
         { text: "OK", onPress: () => Linking.openURL(result.pdfUrl) }
       ]
     );
   } catch (error) {
     console.error('Error submitting form:', error);
     Alert.alert('Error', 'Could not submit the form. ' + error.toString());
   }
 };
 

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
          <AccordionSection title="Gestion" titleStyle={styles.title}>
            <GestionPart control={control} handleSubmit={handleSubmit} formState={formState} />
            </AccordionSection>
          </View>
          <View style={styles.section}>
          <AccordionSection title="Parametre du Batiment" titleStyle={styles.title}>
          <View style={styles.subSection}>
          <AccordionSection title="Surface" titleStyle={styles.subsectionTitle}>
          <Surface control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View>
          <View style={styles.subSection}>
          <AccordionSection title="Mur" titleStyle={styles.subsectionTitle}>
          <Mur control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View>
          <View style={styles.subSection}>
          <AccordionSection title="Plafond" titleStyle={styles.subsectionTitle}>
             <Plafand control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View>
          <View style={styles.subSection}>
           <AccordionSection title="Plancher" titleStyle={styles.subsectionTitle}>
             <Plancher control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View>
          <View style={styles.subSection}>
          <AccordionSection title="Fenetre Orientation" titleStyle={styles.subsectionTitle}>
             <FenetreOrientation control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View> 
          <View style={styles.subSection}>

          <AccordionSection title="Fenetre Description" titleStyle={styles.subsectionTitle}>
             <FenetreDescription control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View>
          <View style={styles.subSection}>

          <AccordionSection title="Portes" titleStyle={styles.subsectionTitle}>
             <Portes control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View>
          <View style={styles.subSection}>
          <AccordionSection title="Chouffage" titleStyle={styles.subsectionTitle}>
             <Choufage control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection>
          </View>
          <View style={styles.subSection}>

          <AccordionSection title="Production Electricite" titleStyle={styles.subsectionTitle}>
             <ProductionElectricite control={control} handleSubmit={handleSubmit} formState={formState} />
          </AccordionSection> 

          </View>
          </AccordionSection>
          </View>
        </ScrollView>
        <Button
        mode="contained" // This prop determines the button style
       onPress={handleSubmit(onSubmit)}
         style={styles.submitButton}
         labelStyle={styles.submitButtonText}
          disabled={!formState.isValid}
          >
         Submit
          </Button>

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fffff9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    margin: 10,

  },
  subSection: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subsectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555555',
    marginBottom: 5,
    paddingLeft: 10,
  },
  submitButton: {
    margin: 10,
    paddingVertical: 12,
    backgroundColor: '#007bff', // Blue background color
    borderRadius: 6, // Larger border radius for a more rounded button
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007bff', // Match the button color for a subtle shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // Increase the elevation for a more pronounced shadow on Android
  },
  submitButtonText: {
    color: '#ffffff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Uppercase text for a more prominent look
  },
});
