import React from 'react'
import { Text, View } from 'react-native'
import Main from './src/components/Main'
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native'

export default function App() {

  return(
    <>
      <StatusBar style='light'/>
      <NativeRouter>
        <Main/>
      </NativeRouter>
    </>
  )
}