import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({route}) => {
  
  console.log('route.params.paramKey' , route?.params?.paramKey)
  return (
    <View style={{color:"blue"}}>
      <Text>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})