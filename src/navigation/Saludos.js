import { StyleSheet } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Hola from '../screens/Hola'
import Chau from '../screens/Chau'
import Adios from '../screens/Adios'
import color from '../constants/color'

const Stack = createNativeStackNavigator();

const Saludos = () => (

  <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? color.boton1 : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : color.boton1,

    }}
  >
    <Stack.Screen name="Home" component={Hola} />
    <Stack.Screen name="Chau" component={Chau} />
    <Stack.Screen name="Adios" component={Adios} />
  </Stack.Navigator>

);


export default Saludos;

const styles = StyleSheet.create({})