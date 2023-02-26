import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxObjectModelScreens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>BoxObjectModelScreens0</Text>
      <Text style={styles.Title}>BoxObjectModelScreens1</Text>
      <Text style={styles.Title}>BoxObjectModelScreens2</Text>
      <Text style={styles.Title}>BoxObjectModelScreens3</Text>
    </View>
  )
}

export default BoxObjectModelScreens
const styles = StyleSheet.create({
   container:{
     flex:1,
    backgroundColor:'#3AD621',
    justifyContent:'center'
   },
    Title:{
      fontSize:20,
      borderWidth:5,
      textAlign:'center',
      padding:30,
      margin:30,
      color:'black',
      fontWeight:'bold', 
      borderRadius:100,
      //backgroundColor:'blue'
    }
});