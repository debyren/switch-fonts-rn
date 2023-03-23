import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BotonTab from '../screens/BotonTab';
import color from '../constants/color';


const Stack = createNativeStackNavigator();

const BotonTabNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? color.boton1 : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : color.boton1,

            }}
        >
            <Stack.Screen
                name="BotonTab"
                component={BotonTab}
                options={{
                    title: 'Otra Pestaña'
                }}
            />
        </Stack.Navigator>
    )
}

export default BotonTabNavigation

const styles = StyleSheet.create({})