import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../constants/color'


const Hola = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola!! Estoy en la primer pantalla</Text>
      <Button title='Continuar' onPress={ () => navigation.navigate("Chau")} color={color.boton1} />
    </View>
  )
}

export default Hola

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F4EADE',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        fontFamily: 'open-sans-bold', 
        padding: 30, 
    }
})