import { StyleSheet, Text, View  , SafeAreaView} from 'react-native'
import React from 'react'
import TabRoutes from './Navigation/TabRoute'
import MainStack from './Navigation/MainStack'
import { NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
     <MainStack/>
     </NativeBaseProvider>
   
  )
}

export default App

const styles = StyleSheet.create({})