import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigation from './TabsNavigation'


const MainNavigator = () => {
  return (
    <NavigationContainer>
        <TabsNavigation />
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})