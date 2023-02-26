import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const DimencionesScreens = () => {

  //Extrae las dimenciones del dispocitivo en uso presiso y sin cambio
  //const {height, width} = Dimensions.get('screen')

  //Extrae las dimenciones del dispocitivo en tiempo real cuando gira cambia el tamaño
  const {height, width} = useWindowDimensions();

  return (
    <View>
      <View style={styles.contenedorAmarillo}>
        {/*DESESTRUCTURA LOS ESTILOS, WIDTH(ANCHO) ES IGUAL AL TOTAL DEL ANCHO DE LA PANTALLA
        Y MULTIPLICALO POR EL 35PORCIENTO*/} 
        <View style={{
          ...styles.contenedorAzul, width:width * 0.35}}
          ></View>
        <View style={styles.contenedorRojo}></View>
      </View>
      <Text style={styles.Title}>W: {width}, H: {height}</Text>
    </View>
  )
}


export default DimencionesScreens

//USO DE SNIPET STLES

const styles = StyleSheet.create({
    contenedorAmarillo:{
      backgroundColor:'yellow', height:'50%', width:'50%'
    },
    contenedorAzul:{
      backgroundColor:'blue', height:'80%', width:'70%', position:'absolute'
    },
    contenedorRojo:{
      backgroundColor:'red', height:'60%', width:'40%', position:'absolute'
    },
    Title:{
      fontSize:50, textAlign:'center'
    }
});