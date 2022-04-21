import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Home from './src/screens/Home'


export default function App() {
  return (
    <View style={styles.container}>
      <Home /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

