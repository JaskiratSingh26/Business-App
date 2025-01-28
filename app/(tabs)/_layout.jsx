import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarInactiveTintColor: 'balck',
        tabBarActiveTintColor: 'green',
        tabBarStyle: {
          height: 50,
          width: '100%', borderWidth: 1,
          borderRadius: 0,
          borderColor: 'green',
          borderTopColor: 'orange',
          backgroundColor: 'white',

        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          marginBottom: 10,
        },


      }}

    >

      <Tabs.Screen name='Home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={27}  color={color}/>
          )
        }}


      />
      <Tabs.Screen name='Explore'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={27} color={color} />

          )
        }}

      />
      <Tabs.Screen name='Profile'

        options={{

          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color}

            options={{
              backgroundColor:'green'
            }}


            />
          )
        }}

      />
    </Tabs>
  )
}

export default TabLayout