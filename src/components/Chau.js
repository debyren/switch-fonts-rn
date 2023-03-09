import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Chau = ({cambioPant, setCambioPant}) => {
  return (
    <View>
      <Text>Chau, ya estoy en la 2da pantalla</Text>
      <Button title='Continuar' onPress={ () => setCambioPant(true)} />
    </View>
  )
}

export default Chau

const styles = StyleSheet.create({})