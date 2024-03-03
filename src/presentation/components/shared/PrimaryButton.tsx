import React from 'react'
import { Pressable, Text, Platform, StyleSheet, PressableProps } from 'react-native';

type PrimaryBtnProps = {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
};

type Props = PressableProps & PrimaryBtnProps;


export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
    return (
            <Pressable 
                onPress={ () => onPress && onPress()  }
                onLongPress={ ()=> onLongPress && onLongPress()  }
                style={ ({pressed})=>[
                styles.button,
                pressed && styles.btnPressed
                ] }
            >
               <Text 
                style={{ color: Platform.OS ==='android' ? 'white' : '#4746AB'}}
               > 
                   { label } 
               </Text>
           </Pressable>
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
    button: {
        backgroundColor: Platform.OS ==='android' ? '#5856D6' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    btnText: {
        color: 'white'
    },
    btnPressed: {
        backgroundColor: Platform.OS==='android' ? '#4746AB' : 'white'
    }
});

