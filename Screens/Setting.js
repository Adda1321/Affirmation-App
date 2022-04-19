import { StyleSheet, Text, View , TouchableOpacity,BackHandler, Switch } from 'react-native'
import React,{useState} from 'react'
import navigationStrings from '../Constants/NavigationStrings';
import { Colors } from '../utilities';
import { NativeBaseProvider, Box , Button , Divider} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

const Setting = ({navigation}) => {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [active, setActive] = useState(null)

  React.useLayoutEffect(() => {
    navigation.setOptions({


      headerLeft: () => (
        <TouchableOpacity onPress={()=>{   navigation.navigate(navigationStrings.HOME, {
          paramKey: 'Some Param from SETTINGS Screen',
        }) ,  setFirst(true)}} style={{ marginLeft:10 , width:23}} >
          <Icon name="long-arrow-left" size={30} color="#fff" style={styles.Icons} />
        </TouchableOpacity>
        // <Button  />
      ),
    });
  }, [navigation]);


  const backAction = () => {
    navigation.navigate(navigationStrings.HOME, {
      paramKey: 'Some Param from SETTINGS Screen back button',
    }) 


    return true;
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);



  return (
    <NativeBaseProvider>
     <View style={{backgroundColor:Colors.Primary_Color , flex:1}}>
       <View style={{ marginHorizontal:20}}>
      <View style={{marginBottom:35 , marginTop:59 ,}}>
    <Box _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }} style={{marginBottom:10 , }}>
      Genere...
    </Box>
    <Divider w="100%" />

      </View>
      <View style={{flexDirection:"row" , flexWrap:'wrap' ,justifyContent:"space-around", alignItems:"center"  }}>



<TouchableOpacity >

</TouchableOpacity>

      <Button
      
  // style={`button ${active === "first" ? "activeButton" : ""}`}  // button activeButton
style={{butt}}
  onClick={() => {
    setActive("first");
  }}
>
  first
</Button>
{/* <button
  style={`button ${active === "Second" ? "activeButton" : ""}`}
  onClick={() => {
    setActive("Second");
  }}
>
  Second
</button>
<button
  style={`button ${active === "Third" ? "activeButton" : ""}`}
  onClick={() => {
    setActive("Third");
  }}
>
  Third
</button> */}

{/* {first ? 

<Button size="sm" onPress={()=>{ setFirst(false) }}>dialog</Button>
:
<Button size="sm" variant="outline" onPress={()=>{setFirst(true)}} > dialog</Button>
 
}

{second ? 

<Button size="sm" onPress={()=>{ setSecond(false)}}>testing</Button>
:
<Button size="sm" variant="outline" onPress={()=>{  setSecond(true) }} > testing</Button>
 
}


{third ? 

<Button size="sm" onPress={()=>{ setThird(false)}}>poetry</Button>
:
<Button size="sm" variant="outline" onPress={()=>{  setThird(true)}} > poetry</Button>
 
} */}

      
      </View>
      </View>
      </View>
    </NativeBaseProvider>
       
  )
}

export default Setting

const styles = StyleSheet.create({})