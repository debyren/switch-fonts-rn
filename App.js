
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

import Saludos from './navigation/Saludos';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);



const [cambioPant, setCambioPant] = useState(true);
if (!fontsLoaded) {
  return null;
}
  return (
    
     <Saludos style={styles.container} onLayout={onLayoutRootView} />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#F9DEB6',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
