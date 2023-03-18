import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Adios = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Hasta acá llego la app ;(</Text>
    </View>
  )
}

export default Adios

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#BED6DC',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',

    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        padding: 30, 
    }
})