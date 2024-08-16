import { Stack } from 'expo-router'
import React, { Component } from 'react'
import { LogBox, Text, View } from 'react-native'

export default function   _layout (){
  LogBox.ignoreLogs(["Erreur"])
    return (
      <Stack 
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='exercises' 
        options={{presentation: "fullScreenModal"}} />
      </Stack>
    )
}
