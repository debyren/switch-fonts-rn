import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../constants/color'

const Hola = ({cambioPant, setCambioPant}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola!! Estoy en la primer pantalla</Text>
      <Button title='Continuar' onPress={ () => setCambioPant(false)} color={color.boton1} />
    </View>
  )
}

export default Hola

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CCD1D1',
    },
    title:{
        fontFamily: 'open-sans-bold',
        padding: 30, 
    }
})