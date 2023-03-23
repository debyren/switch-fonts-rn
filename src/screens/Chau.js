import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import color from '../constants/color'

const Chau = ({ navigation}) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Ahora estoy en la 2da pantalla</Text>
      <Button title='Continuar' onPress={ () => navigation.navigate("Adios")} color={color.boton2}   />
    </View>
  )
}

export default Chau

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CCE2D7',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        fontFamily: 'open-sans',
        fontSize:20,
        padding: 30, 
    }
})