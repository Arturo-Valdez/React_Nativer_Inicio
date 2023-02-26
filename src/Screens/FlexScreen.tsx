import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
        <View style={styles.container1}><Text style={styles.Title}>Caja 1</Text></View>
        <View style={styles.container2}><Text style={styles.Title}>Caja 2</Text></View>
        <View style={styles.container3}><Text style={styles.Title}>Caja 3</Text></View>
    </View>
  )
}

export default FlexScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems:'center',
    flexWrap:'wrap', //Se utiliza cuando los items se desvordan y reinicia segun el flex direccion
    flexDirection:'row'
  },
  container1: {
    //flex: 1, //1+2+3 = 1/6
    borderWidth: 3,
    borderColor:'white',
    marginTop:5
  },
  container2: {
    //flex: 2, //1+2+3 = 2/6 
    borderWidth: 3,
    borderColor:'white',
    marginTop:5
  },
  container3: {
    //flex: 3, //1+2+3 = 3/6
    borderWidth: 3,
    borderColor:'white',
    marginTop:5
  },
  Title:{
    fontSize:20, fontWeight:'bold', color:'black'
  }
});