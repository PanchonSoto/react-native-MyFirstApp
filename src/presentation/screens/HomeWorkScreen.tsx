import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]}/>
        <View style={[styles.box, styles.orangeBox]}/>
        <View style={[styles.box, styles.blueBox]}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        left: 100
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        left: 100
    },
    blueBox: {
        backgroundColor: '#28C4D9',
        top: 100,
        right: 100
    }
});

//tarea 1: agregar flex:1 a pruple y blue box, flex:10 a orangeBox
//! t1 Solucion: flex:1  al orangeBox
//tarea 2: agregar al "container;justifyContent: 'center'" y al blue box un width de "auto"
//tarea 3: container: row-reverse,alignitems:center, purpleBox:bottom:100, orangeBox: left:190, blueBox: top:100, right: 200
//! t3 Solucion purpleBox: alingself: 'flex-end', blueBox:'center'
//tarea 4: pBox: alignSelf: 'flex-start' y blueBox: 'flex-end'
//tarea 5: poner a todos los box height de 100%
//tarea 6: boxes width:100%, flex: 1, 1 y ultimo 3, flexdirection column
//tarea 7: justifycontent 'center'
//tarea 8: orangeBox left:100
//tarea 9: pBox: left:100, oBox: left:100, bBox: top:100 right:100
//tarea 10: orangeBox top: 50, flexD row