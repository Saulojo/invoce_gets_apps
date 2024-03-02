import React from 'react';

import { StyleSheet, StatusBar,Text, View, TouchableOpacity  } from 'react-native';


import Fatura_page from './pages/fatura/index.js'



const borderweight = StatusBar.currentHeight + 10;

export default function App() {


  return (
    <View ClassName="container" style={styles.container}>
      <Fatura_page/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: borderweight,
    backgroundColor:'#0F1521',
    width: '100%',
    height: '100%',
  },


});
