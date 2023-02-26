import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button, TouchableNativeFeedbackBase, TouchableNativeFeedback } from 'react-native';
import { useState } from 'react';

const ContadorScreens = () => {
  //contador cambiante
  const [Contador, setContador] = useState(0)

  return (

    <View style={styles.container}>
      <Text style={styles.Tiltle1}>Hola!, soy contador</Text>
      <Text style={styles.Tiltle2}>Contador: {Contador}</Text>
      <View style={{ flexDirection: 'row', }}>

        <TouchableOpacity onPress={() => setContador(Contador + 1)}>
          <View style={styles.conjunto}>
            <Text style={styles.conjuntotext}>MAS Click me!!!</Text>
          </View>
        </TouchableOpacity>

        <View style={{ margin: 20 }}></View>
        {/*Boton generado TouchableOpacity, para generar estilos, Button no es util*/}
        <TouchableOpacity onPress={() => setContador(Contador - 1)}>
          <View style={styles.conjunto}>
            <Text style={styles.conjuntotext}>MENOS Click me!!!</Text></View>
        </TouchableOpacity>

      </View>

      <Text style={{ marginTop: 90, fontSize: 30, color: '#000000', fontWeight: 'bold' }}>Hola! Soy un boton flotante</Text>
      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 25 }}>

        <View style={styles.flotantetext}>
          <TouchableNativeFeedback onPress={() => setContador(Contador + 1)} background={TouchableNativeFeedback.Ripple('#9D7DD5', false, 30)}>
            <View style={styles.flotante}>
              <Text style={styles.flotantetext}>+1</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={{ marginLeft: 100, marginRight: 100 }}></View>
        <View >
          {/*Boton generado <TouchableNativeFeedback para boton flotante*/}
          <TouchableNativeFeedback onPress={() => setContador(Contador - 1)} background={TouchableNativeFeedback.Ripple('#9D7DD5', false, 30)}>
            <View style={styles.flotante}>
              <Text style={styles.flotantetext}>-1</Text></View>
          </TouchableNativeFeedback>
        </View>

      </View>
    </View>
  )
}

export default ContadorScreens


//EXPORTAR ESTILOS A LOS COMPONENTES

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#62CD1D', alignItems: 'center', justifyContent: 'center'
  },
  Tiltle1: {
    fontSize: 40, color: '#000000', fontWeight: 'bold', top: -150, marginBottom: 50
  },
  Tiltle2: {
    fontSize: 50, color: '#000000', fontWeight: 'bold', top: -15
  },
  conjunto: {
    marginTop: 50, borderStyle: 'solid', borderRadius: 100, backgroundColor: '#000000', height: 50, justifyContent: 'center', padding: 12
  },
  conjuntotext: {
    textAlign: 'center'
  },
  //Botonflotantemas:{
  // width:350,bottom:25,right:25,flexDirection:'row',  justifyContent:'center',alignSelf:'center',
  // position:'absolute'
  //},
  flotante: {
    backgroundColor: '#6731C6',
    marginTop: 50,
    borderStyle: 'solid',
    borderRadius: 100,
    height: 70, width: 70, justifyContent: 'center', padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

  },
  flotantetext: {
    alignSelf: 'center', fontWeight: 'bold', fontSize: 20
  }

})

