import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import navigationStrings from '../Constants/NavigationStrings';
import ImagePaths from '../Constants/ImagePaths';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../utilities';
import NavBar from '../Componenets/NavBar';
// import RNFetchBlob from 'rn-fetch-blob';
// import ProgressCircle from 'react-native-progress-circle';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import PlayAudio from '../Componenets/Play';
// import Sound from 'react-native-sound';
import Count from '../Componenets/Count';

// Enable playback in silence mode

// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const Home = ({navigation,route }) => {
  const [data, setdata] = useState(null);
  
  console.log('route.params.paramKey--' , route?.params?.paramKey)

  const pull_data = (data) => {
    console.log('COUNT--',data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    setdata(data);
  }


  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImagePaths.backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 100,
          }}>
          
          <Button title="RELEASE PLAY" onPress={() => music.play()} />
          <Button title="STOP PLAY" onPress={() => Stop()} />

        </View> */}

        {/* <Text style={{color:"red" , backgroundColor:"white"}}>
{seconds} / Total seconds {duration}
          </Text> */}

          <View style={{flex:1 , justifyContent:'center' , alignItems:'center' , marginTop:200}}>
 

          {/* <ProgressCircle
            percent={time}
            radius={120}
            borderWidth={19}
            color="pink"
            shadowColor="yellow"
            bgColor="red"
        >
            <Text style={{ fontSize: 18 }}> {`${time}%`} </Text>
        </ProgressCircle> */}
   <PlayAudio navigation={{navigation}}/>
         

          </View>
          <View style={{marginTop:95}}>
            <Count func={pull_data} />
          </View>
        <NavBar navigation={{navigation}} />
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Icon: {
    height: 40,
    width: 40,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor:"#000",
    // opacity:0.6,
    // zIndex:0
  },
});
