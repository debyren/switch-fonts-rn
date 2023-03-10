
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Hola from './src/components/Hola';
import Chau from './src/components/Chau';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import color from './src/constants/color';


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
    <View style={styles.container} onLayout={onLayoutRootView} >
      {cambioPant === true ?
      <Hola
        cambioPant={cambioPant}
        setCambioPant={setCambioPant} /> :
      <Chau
      cambioPant={cambioPant}
      setCambioPant={setCambioPant}/>
    
    }  
    </View>
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
