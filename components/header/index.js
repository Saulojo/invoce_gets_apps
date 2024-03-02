import React from 'react';

import { StyleSheet,Text, View, TouchableOpacity  } from 'react-native';
import Svg, { Path, Line } from "react-native-svg";
import { useFonts, Jomhuria_400Regular } from '@expo-google-fonts/jomhuria';


export class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonselect: "2"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.setState({buttonselect: "1"})} style={[styles.btn_header, {marginLeft:80}]}>
          <Svg style={{marginTop:12, marginRight:8}} width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20 20H4V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4 16.5L12 9L15 12L19.5 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>
          <Text style={[styles.text_header,{opacity: this.state.buttonselect == "1" ? 0.4 : 1, color:this.state.buttonselect == "1" ? '#00FFF0' : 'white'}]}>Painel</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({buttonselect: "2"})} style={[styles.btn_header, {marginRight:80}]}>
          <Svg style={{marginTop:15,marginRight:8}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.125 7.3125H11.375M8.125 13H17.875M8.125 16.25H17.875M8.125 19.5H11.375M6.5 23.5625H19.5C19.931 23.5625 20.3443 23.3913 20.649 23.0865C20.9538 22.7818 21.125 22.3685 21.125 21.9375V4.0625C21.125 3.63152 20.9538 3.2182 20.649 2.91345C20.3443 2.6087 19.931 2.4375 19.5 2.4375H6.5C6.06902 2.4375 5.6557 2.6087 5.35095 2.91345C5.0462 3.2182 4.875 3.63152 4.875 4.0625V21.9375C4.875 22.3685 5.0462 22.7818 5.35095 23.0865C5.6557 23.3913 6.06902 23.5625 6.5 23.5625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.875 7.71875C18.0994 7.71875 18.2812 7.53687 18.2812 7.3125C18.2812 7.08813 18.0994 6.90625 17.875 6.90625C17.6506 6.90625 17.4688 7.08813 17.4688 7.3125C17.4688 7.53687 17.6506 7.71875 17.875 7.71875Z" fill="white" stroke="white"/>
          </Svg>

          <Text style={[styles.text_header,{opacity: this.state.buttonselect == "2" ? 0.4 : 1, color:this.state.buttonselect == "2" ? '#00FFF0' : 'white'}]}>Fatura</Text>

        </TouchableOpacity>
      </View>
    )
  }
}


export default function Header() {

  let [fontsLoaded] = useFonts({
    Jomhuria_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View ClassName="container">
      <Click/>
      <Svg style={{marginTop:-5}} width="1921" height="4" viewBox="0 0 1921 4" fill="none" xmlns="http://www.w3.org/2000/svg">

        <Line x1="-100%" y1="3.5" x2="100%" y2="0.500001" stroke="black"/>


      </Svg>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    display: 'inline-flex',
    flexDirection: 'row',
    position: 'relative',

  },

  btn_header: {
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
    display: 'inline-flex',
    position: 'relative',
    flexDirection: 'row',
  },
  text_header: {
    fontFamily: 'Jomhuria_400Regular',
    fontSize: 30,
  },

});
