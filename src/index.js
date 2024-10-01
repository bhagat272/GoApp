import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Routes from './navigation/navigationstack';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
 
const index = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Routes />
     </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default index;
