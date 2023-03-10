import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import color from '../constants/color'

const Chau = ({cambioPant, setCambioPant}) => {
  return (
    <View>
      <Text style={styles.title}>Chau, ya estoy en la 2da pantalla</Text>
      <Button title='Continuar' onPress={ () => setCambioPant(true)} color={color.boton2}  />
    </View>
  )
}

export default Chau

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans',
        padding: 30, 
    }
})