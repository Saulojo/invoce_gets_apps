import React, { useEffect, useState }  from 'react';

import { StyleSheet, Text, View,PermissionsAndroid   } from 'react-native';
import Svg, { Path,Line } from "react-native-svg";
import {  useFonts, Jomhuria_400Regular } from '@expo-google-fonts/jomhuria';
import * as SQLite from 'expo-sqlite';

function get_type_transaction(type){

  switch (type) {
    case 1:
      return [
        "Comida",
        <Svg  xmlns="http://www.w3.org/2000/svg" style={{marginTop:30}} width="25" height="25" viewBox="0 0 29 28" fill="none">
          <Path d="M21.8225 26.8333H23.8283C24.8433 26.8333 25.6771 26.075 25.7979 25.1183L27.7917 5.89166H21.75V1.16666H19.3696V5.89166H13.3642L13.7267 8.62166C15.7929 9.16999 17.7263 10.1617 18.8863 11.2583C20.6263 12.915 21.8225 14.63 21.8225 17.43V26.8333ZM1.20834 25.6667V24.5H19.3696V25.6667C19.3696 26.2967 18.8258 26.8333 18.125 26.8333H2.41668C1.75209 26.8333 1.20834 26.2967 1.20834 25.6667ZM19.3696 17.5C19.3696 8.16666 1.20834 8.16666 1.20834 17.5H19.3696ZM1.20834 19.8333H19.3333V22.1667H1.20834V19.8333Z" fill="#FFDC5F"/>
        </Svg>

      ]

    case 2:
      return [
        "Saúde",
        <Svg width="25" height="22" style={{marginTop:32}} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12.5 21.9083L10.7479 20.3683C4.52499 14.92 0.416656 11.315 0.416656 6.91667C0.416656 3.31167 3.34082 0.5 7.06249 0.5C9.16499 0.5 11.1829 1.445 12.5 2.92667C13.8171 1.445 15.835 0.5 17.9375 0.5C21.6592 0.5 24.5833 3.31167 24.5833 6.91667C24.5833 11.315 20.475 14.92 14.2521 20.3683L12.5 21.9083Z" fill="#0FA958"/>
        </Svg>
      ]

    case 3:
      return [
        "Transporte",

        <Svg width="25" height="22" style={{marginTop:32}} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12.5 21.9083L10.7479 20.3683C4.52499 14.92 0.416656 11.315 0.416656 6.91667C0.416656 3.31167 3.34082 0.5 7.06249 0.5C9.16499 0.5 11.1829 1.445 12.5 2.92667C13.8171 1.445 15.835 0.5 17.9375 0.5C21.6592 0.5 24.5833 3.31167 24.5833 6.91667C24.5833 11.315 20.475 14.92 14.2521 20.3683L12.5 21.9083Z" fill="#0FA958"/>
        </Svg>
      ]

    case 4:
      return [
        "Educação",
        <Svg width="25" height="22" style={{marginTop:32}} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12.5 21.9083L10.7479 20.3683C4.52499 14.92 0.416656 11.315 0.416656 6.91667C0.416656 3.31167 3.34082 0.5 7.06249 0.5C9.16499 0.5 11.1829 1.445 12.5 2.92667C13.8171 1.445 15.835 0.5 17.9375 0.5C21.6592 0.5 24.5833 3.31167 24.5833 6.91667C24.5833 11.315 20.475 14.92 14.2521 20.3683L12.5 21.9083Z" fill="#0FA958"/>
        </Svg>
      ]

    case 5:
      return [
        "Outros",
        <Svg width="25" height="22" style={{marginTop:32}} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12.5 21.9083L10.7479 20.3683C4.52499 14.92 0.416656 11.315 0.416656 6.91667C0.416656 3.31167 3.34082 0.5 7.06249 0.5C9.16499 0.5 11.1829 1.445 12.5 2.92667C13.8171 1.445 15.835 0.5 17.9375 0.5C21.6592 0.5 24.5833 3.31167 24.5833 6.91667C24.5833 11.315 20.475 14.92 14.2521 20.3683L12.5 21.9083Z" fill="#0FA958"/>
        </Svg>
      ]

    case 6:
      return [
        "Salário",
        <Svg width="25" height="22" style={{marginTop:32}} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12.5 21.9083L10.7479 20.3683C4.52499 14.92 0.416656 11.315 0.416656 6.91667C0.416656 3.31167 3.34082 0.5 7.06249 0.5C9.16499 0.5 11.1829 1.445 12.5 2.92667C13.8171 1.445 15.835 0.5 17.9375 0.5C21.6592 0.5 24.5833 3.31167 24.5833 6.91667C24.5833 11.315 20.475 14.92 14.2521 20.3683L12.5 21.9083Z" fill="#0FA958"/>
        </Svg>
      ]

    case 7:
      return [
        "Transação",
        <Svg width="25" height="22" style={{marginTop:32}} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12.5 21.9083L10.7479 20.3683C4.52499 14.92 0.416656 11.315 0.416656 6.91667C0.416656 3.31167 3.34082 0.5 7.06249 0.5C9.16499 0.5 11.1829 1.445 12.5 2.92667C13.8171 1.445 15.835 0.5 17.9375 0.5C21.6592 0.5 24.5833 3.31167 24.5833 6.91667C24.5833 11.315 20.475 14.92 14.2521 20.3683L12.5 21.9083Z" fill="#0FA958"/>
        </Svg>
      ]

    default:
      return [
        "Outros",
        <Svg width="25" height="22" style={{marginTop:32}} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12.5 21.9083L10.7479 20.3683C4.52499 14.92 0.416656 11.315 0.416656 6.91667C0.416656 3.31167 3.34082 0.5 7.06249 0.5C9.16499 0.5 11.1829 1.445 12.5 2.92667C13.8171 1.445 15.835 0.5 17.9375 0.5C21.6592 0.5 24.5833 3.31167 24.5833 6.91667C24.5833 11.315 20.475 14.92 14.2521 20.3683L12.5 21.9083Z" fill="#0FA958"/>
        </Svg>
      ]

  }
  
}

function db_connect(selected_day,selected_month,selected_year){

  const db = SQLite.openDatabase('db_teste5.db');
  const [IsLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Saulo, setSaulo] = useState(0);
  const time_limit = 1000;
  const card_limit = 8;
  const [card_exibing, setCard_exibing] = useState(5);


  /*useEffect(() => {

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, day INTEGER, month INTEGER,year INTEGER, value REAL, types INTEGER, name TEXT);'
        ,null,(tx, results) => {
          console.log("correct 1",results)
        },
        (tx, error) => {
          console.log("error 1",error)
        }
      );
    });


    db.transaction(tx => {
      tx.executeSql(
        'select * from transactions;',null,
        (tx, results) => {
          console.log("correct 2",results)
          setData(results.rows._array)
          setIsLoading(false)
        },
        (tx, error) => {
          console.log("error 2",error)
        }
      )
    })
    
  })
  */
  const insert_transaction_test = () => {
   
    const day = Math.floor(Math.random() * 30)
      const month = Math.floor(Math.random() * 12)
      const year = 2023
      const value = Math.random() * 100
      const types = Math.floor(Math.random() * 7)
      const name = "Teste" + day

    db.transaction(tx => {
      
      tx.executeSql(
        'insert into transactions (day,month,year,value,types,name) values (?,?,?,?,?);',[day,month,year,value,types,name],
      )
    })

    
  }

  if (data.length < 20){

    let temp_arr = []
    for (let i = 0; i < 20; i++){
      const day = Math.floor(Math.random() * 30)
      const month = Math.floor(Math.random() * 12)
      const year = 2023
      const value = Math.random() * 100
      const types = Math.floor(Math.random() * 7)
      const name = "Teste" + day

      temp_arr[i] = {
        day:day,
        month:month,
        year:year,
        value:value,
        types:types,
        name:name,
      }
    }
    setData(temp_arr)
    setIsLoading(false)
  }
  console.log("chegou 1")
  if (IsLoading) {
    console.log("chegou 2")
    return (<Text>Loading...</Text>);
  }
  

  const return_data = () => {

    let data_show = []

    if (data.length > 0){
      console.log(card_exibing,data.length,card_exibing + card_limit,(card_exibing + card_limit) <= data.length? (card_exibing + card_limit) : data.length)
      const max_i = ((card_exibing + card_limit) <= data.length? (card_exibing + card_limit) : data.length)
      for (let i = card_exibing; i < max_i ; i++) {

        const [tipo,icon] = get_type_transaction(data[i].types)
        data_show[i] = 
          (
            <View className='card_right' style={styles.card_right}>
              <View style={styles.card_right_up}>
                {icon}
                <Text style={styles.text_num_card}>{data[i].day}</Text>
                <Text style={styles.text_name_card} >{data[i].name}</Text>
              </View>
              <View style={styles.card_right_down}>
                <Text style={[styles.currency_sty,{color:data[i].value > 0 ? '#BAFF75' : '#E34F4F'}]}>{data[i].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                <Text style={styles.typetran}>{tipo}</Text>
              </View>

              <Svg width="310" height="2" viewBox="0 0 310 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Line x1="25.75604" y1="1.12982" x2="239.491" y2="1.12982" stroke="#5E5E5E"/>
              </Svg>
            </View>
          )
      }
    }
    
    return data_show

    /*return data.map((item,index)=>{
      if(index > card_limit + card_exibing) return
      
      //const [tipo,icon] = get_type(item.types)
      

      return (
        <View className='card_right' style={styles.card_right}>
          <View style={styles.card_right_up}>
            {icon}
            <Text style={styles.text_num_card}>{item.date}</Text>
            <Text style={styles.text_name_card} >{item.name}</Text>
          </View>
          <View style={styles.card_right_down}>
            <Text style={[styles.currency_sty,{color:item.value > 0 ? '#BAFF75' : '#E34F4F'}]}>{'R$'+item.value}</Text>
            <Text style={styles.typetran}>{tipo}</Text>
          </View>
        </View>
      )
      
    })*/
  }

  return return_data()
 
}

export default function Fatura_cards() {
  const data = db_connect()

  let [fontsLoaded] = useFonts({
    Jomhuria_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>

     

      {data}
      
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily:"Jomhuria_400Regular",
    width: 350,
    height: 650,
    overflow:"hidden",
  },
  card_right:{
    
    height:70,
    width:230,
    marginLeft:90,
    marginTop:10,

    
  },
  text_num_card:{
    color:"#5E5E5E",
    fontFamily:"Jomhuria_400Regular",
    fontSize:30,
    textAlignVertical:"center",
    marginLeft:15,
  },
  card_right_up:{
    flexDirection:"row",
    flexWrap:"wrap",
  },
  text_name_card:{
    color:"white",
    fontFamily:"Jomhuria_400Regular",
    fontSize:34,
    textAlignVertical:"center",
    marginLeft:20,
  },
  card_right_down:{

  },
  currency_sty:{

    fontFamily:"Jomhuria_400Regular",
    fontSize:28,
    marginTop:-30,
    marginLeft:50,
  },
  typetran:{
    marginTop:-48,
    marginLeft:145,
    fontSize:28,
    fontFamily:"Jomhuria_400Regular",
    color:"#5E5E5E",
  }

});