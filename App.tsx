import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import CounterM3Screen from './src/presentation/screens/CounterM3Screen';

import IonIcon from 'react-native-vector-icons/Ionicons'

import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
import { PositionScreen } from './src/presentation/screens/PositionScreen';

export const App = () => {

  const iconProvider = (props: any) => <IonIcon {...props} />;

  return (
    <PaperProvider settings={{ icon: iconProvider }}>
      <SafeAreaView style={{ flex: 1 }}>

        {/* <HelloWorldScreen name='Panshibe'/> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        <PositionScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
