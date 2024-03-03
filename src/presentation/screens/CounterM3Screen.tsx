import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles } from '../theme/global.styles';


export default function CounterM3Screen() {

    const [count, setCount] = useState(1);

    const increaseCount = (value: number): void => {
        setCount(count + value);
    }




  return (
    <View style={ globalStyles.centerContainer }>
        <Text style={ globalStyles.title }>{ count }</Text>
        
        {/* <Icon name='accessibility-outline' size={25}/> */}

        <FAB 
         style= { globalStyles.fab }
         onPress={ () => increaseCount(+1) }
         onLongPress={ ()=> setCount(0) }
         icon='add'
        />

    </View>
  );
}





