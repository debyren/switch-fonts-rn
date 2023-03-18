import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Hola from '../src/components/Hola'
import Chau from '../src/components/Chau'
import Adios from '../src/components/Adios'

const Stack = createNativeStackNavigator();

const Saludos = () => (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Hola} />
        <Stack.Screen name="Chau" component={Chau} />
        <Stack.Screen name="Adios" component={Adios} />
    </Stack.Navigator>
   </NavigationContainer>
  );


export default Saludos;

const styles = StyleSheet.create({})