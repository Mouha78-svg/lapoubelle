import { Stack } from 'expo-router'
import React, { Component } from 'react'
import { LogBox, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function   _layout (){
  LogBox.ignoreLogs(["Erreur"])
    return (
      <Stack 
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='article' 
        options={{presentation: "fullScreenModal"}} />
      </Stack>,

       <Tabs screenOptions={{ tabBarActiveTintColor: 'green' }}>
       <Stack.Screen
         name="home"
         options={{
           title: 'Home',
           tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
         }}
       />
       <Stack.Screen
         name="maps"
         options={{
           title: 'Maps',
           tabBarIcon: ({ color }) => <FontAwesome size={28} name="map" color={color} />,
         }}
       />
       <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="article"
        options={{
          href: null,
        }}
      />
     </Tabs>
    )
}


