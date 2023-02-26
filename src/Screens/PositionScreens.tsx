import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

const PositionScreens = () => {

  const [top, settop] = useState(0)
  const [left, setleft] = useState(0)
  const [posicion, setposicion] = useState<any>()
  const posicionAb = 'absolute';
  const posicionRe = 'relative';


  return (
    <View style={styles.containerMadre}>
      {/*CAJAS*/}
      <View style={styles.container}>
        <View style={{ ...styles.conainerAzul, top: top, left: left, position: posicion }}></View>
        <View style={{ ...styles.containerGris, top: top, left: left, position: posicion }}></View>
        <View style={{ ...styles.containerrojo, top: top, left: left, position: posicion }}></View>
      </View>

      {/*BOTONES PARA SEPARAR O JUNTAR LAS BOX */}
      <View style={styles.mandos1}>
        <View style={styles.boton1}>
          <TouchableOpacity onPress={() => setposicion(posicionAb)}>
            <View style={styles.interno1}><Text>Juntar</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.boton1}>
          <TouchableOpacity onPress={() => setposicion(posicionRe)}>
            <View style={styles.interno1}><Text>Separar</Text></View>
          </TouchableOpacity>
        </View>
      </View>

      {/*BOTONES PARA LA MOVILIDAD DEL BOX*/}
      <View style={styles.mandos}>

        <View style={styles.boton}>
          <TouchableOpacity onPress={() => settop(top - 10)}>
            <View style={styles.interno}><Text>top</Text></View>
          </TouchableOpacity>
        </View>

        <View style={styles.boton}>
          <TouchableOpacity onPress={() => settop(top + 10)}>
            <View style={styles.interno}><Text>botton</Text></View>
          </TouchableOpacity>
        </View>

        <View style={styles.boton}>
          <TouchableOpacity onPress={() => setleft(left + 10)}>
            <View style={styles.interno}><Text>right</Text></View>
          </TouchableOpacity>
        </View>

        <View style={styles.boton}>
          <TouchableOpacity onPress={() => setleft(left - 10)}>
            <View style={styles.interno}><Text> left </Text></View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default PositionScreens

const styles = StyleSheet.create({
  containerMadre:{
    width:360,
    height:500,
  },
  container: {
    flex: 1,
    position:'absolute'
  },
  conainerAzul: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderWidth: 5,
    borderColor: 'white',
    top: 100,
  },
  containerrojo: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderWidth: 5,
    borderColor: 'white',
    top: 50
  },
  containerGris: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderWidth: 5,
    borderColor: 'white',
  },

  mandos1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  boton1: {
    backgroundColor: '#116FB0',
    height: 70,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 520
  },
  interno1: {
    backgroundColor: '#116FB0',
    height: 70,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },


  mandos: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  interno: {
    backgroundColor: '#AE11B0',
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#AE11B0',
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 550
  }
});