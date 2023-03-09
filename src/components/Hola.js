import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hola = ({cambioPant, setCambioPant}) => {
  return (
    <View>
      <Text>Hola!! Estoy en la primer pantalla</Text>
      <Button title='Continuar' onPress={ () => setCambioPant(false)} />
    </View>
  )
}

export default Hola

const styles = StyleSheet.create({})