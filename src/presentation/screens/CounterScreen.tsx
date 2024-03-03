import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { PrimaryButton } from '../components';

export default function CounterScreen() {

    const [count, setCount] = useState(1);

    const increaseCount = (value: number): void => {
        setCount(count + value);
    }



  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>{ count }</Text>
        
        <PrimaryButton 
         label='Increase'
         onPress={ () => increaseCount(+1) }
         onLongPress={ ()=> setCount(0) }
        />

    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 80,
      color: 'black',
      fontWeight: '300'
    },
});


