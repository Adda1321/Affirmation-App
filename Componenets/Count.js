import {StyleSheet, Text, View, Button, TouchableHighlight , TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';

import {Colors} from '../utilities'; 

const Count = (props) => {
    const [count, setcount] = useState(1);
    useEffect(() => {
        props.func(`${count}`)
    }, [])
    
   
  const decrement = () => {
    setcount(count - 1);
    props.func(`${count-1}`)
  };
  const Increment = () => {
    setcount(count + 1);
    props.func(`${count+1}`)
  };
  return (
      <View>
    <View style={{flexDirection: 'row' , justifyContent:'center' , alignItems:'center'}}>
      {count !== 1 ? (
        <TouchableHighlight style={{marginRight:-30}} onPress={decrement} underlayColor='rgba(132,171,127,0.5)' >
          <Text  style={[styles.counter]}>-</Text>
        </TouchableHighlight>
      ) : <View style={[styles.counter,{marginRight:-30}]}/> }

      <Text style={[styles.counter, {fontSize:50 , marginHorizontal:8}]}>
        {count}
      </Text>
      {count < 8 ? (
        <TouchableHighlight style={{marginLeft:-30}} onPress={Increment} underlayColor='rgba(132,171,127,0.5)'>
          <Text  style={[styles.counter]}>+</Text>
        </TouchableHighlight>): <View style={[styles.counter,{marginRight:-30}]}/>
      }
    </View>
    <Text style={{color:'white' , textAlign:'center' , fontSize:15 , fontWeight:'600'}}>
        min
    </Text>
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
 
  counter:{backgroundColor: 'transparent', color:'white', textAlign: 'center' , textAlignVertical:"center", height:80,width:80 , fontSize:40}
});
