import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const TareasScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPurple}></View>
      <View style={styles.containerOrange}></View>
      <View style={styles.containerAqua}></View>
    </View>
  )
}

export default TareasScreens

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#28425B',
      justifyContent:'center', alignItems:'center',
      flexDirection:'row',       
    },
    containerPurple:{
      width:60,
      height:60,
      backgroundColor:'purple',
      borderWidth:5,
      borderColor:'white', 
    },
    containerOrange:{
      width:60,
      height:60,top:30,
      backgroundColor:'orange',
      borderWidth:5,
      borderColor:'white', 
    },
    containerAqua:{
      width:60,
      height:60,
      backgroundColor:'aqua',
      borderWidth:5,
      borderColor:'white',
    }
});