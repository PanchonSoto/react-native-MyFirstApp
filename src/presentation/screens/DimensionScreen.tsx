import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

import { Dimensions } from 'react-native';
// const { height, width } = Dimensions.get('window');

export const DimensionScreen = () => {

    const { height, width } = useWindowDimensions();

  return (
    <View>
        <View style={styles.container}>
            <View style={{
                ...styles.purpleBox,
                width: width * 0.5
            }} />
        </View>
        <Text style={styles.title}>w:{width}, h:{height}</Text>
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
        // width: '100%',
        width: 300,
        height: 300,
        backgroundColor: 'red',
    }, 
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});