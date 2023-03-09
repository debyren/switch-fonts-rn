
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Hola from './src/components/Hola';
import Chau from './src/components/Chau';

export default function App() {
const [cambioPant, setCambioPant] = useState(true);

  return (
    <View style={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
