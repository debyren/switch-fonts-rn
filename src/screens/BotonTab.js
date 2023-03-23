import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BotonTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text} >Soy otra perstaña ;) </Text>
    </View>
  )
}

export default BotonTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    }  
})