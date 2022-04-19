import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import ImagePaths from '../Constants/ImagePaths';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import navigationStrings from '../Constants/NavigationStrings';
const Play = (props) => {
    const {navigation} = props.navigation
  return (
    <View   style={{
        // flex:1,
width: 250,
  height: 250,
  // backgroundColor:'black',
  backgroundColor: 'rgba(0,0,0,0.5)',
// background-color: green;\
borderRadius: 250/2,
justifyContent:'center',
 alignItems:'center'
}}>
  <View opacity={1} >

<TouchableOpacity
  onPress={() => navigation.navigate(navigationStrings.PLAY)} 
>
      <Icon name="play" size={90} color="#fff" style={{ marginLeft:20 }}/>
      </TouchableOpacity>
  </View>
      </View>
  )
}

export default Play

const styles = StyleSheet.create({})