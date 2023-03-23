import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Saludos from './Saludos'
import BotonTabNavigation from './BotonTabNavigation'


const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <BottomTabs.Screen name="Saludos" component={Saludos}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            < AntDesign name="like1" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
                            <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Saludos</Text>
                        </View>
                    )
                }}

            />
            <BottomTabs.Screen name="Cart-tab" component={BotonTabNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <Entypo name="emoji-flirt" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
                            <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Otra pestaña</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 80
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
