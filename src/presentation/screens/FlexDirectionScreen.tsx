import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box,styles.box1]}/>
        <View style={[styles.box,styles.box2]}/>
        <View style={[styles.box,styles.box3]}/>
        <View style={[styles.box,styles.box4]}/>
        <View style={[styles.box,styles.box1]}/>
        <View style={[styles.box,styles.box2]}/>
        <View style={[styles.box,styles.box3]}/>
        <View style={[styles.box,styles.box4]}/>
        <View style={[styles.box,styles.box1]}/>
        <View style={[styles.box,styles.box2]}/>
        <View style={[styles.box,styles.box3]}/>
        <View style={[styles.box,styles.box4]}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d1d1',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        gap: 10
    },
    box: {
        width: 100,
        height: 100
    },
    box1: {
        backgroundColor: '#5856D6'
    },
    box2: { 
        backgroundColor: '#3f3da0',
        // alignSelf: 'flex-end'
    },
    box3: {
        backgroundColor: '#26246e',
        // alignSelf: 'center'
    },
    box4: {
        backgroundColor: '#080725',
    },
});
