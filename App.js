import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import {Provider} from 'react-redux';



import Store from './src/store.js';





export default function App() {

  

  return (

    

    <Provider store={Store}>
        <Navigation></Navigation>
    </Provider>
      
    
  );
}



const style = StyleSheet.create({

});
