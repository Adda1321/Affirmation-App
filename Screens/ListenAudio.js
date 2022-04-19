import {StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import ImagePaths from '../Constants/ImagePaths';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Sound from 'react-native-sound';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {audioTests} from '../utilities/SoundData';
import {Value} from 'react-native-reanimated';
const ListenAudio = () => {
  const [music, setMusic] = useState(null);
  const [duration, setDuration] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [time, setTime] = useState(0);
  const [check, setCheck] = useState(true);
  const [isStart, setisStart] = useState(false);
  const [id, setId] = useState(1);
  // var whoosh;
  const array = ['apnaajsudharo.mp3', 'ignorekarnaseekhnapadega.mp3'];
  let count = 0;
  let sec = 0;
  useEffect(() => {
    testingPlay(array[count]);
  }, []);

  useEffect(() => {
    if (music) {
      let id = setInterval(() => {
        music.getCurrentTime((second, play) => {
          // setseconds(second);
          sec = second;
          setTime(Math.ceil((second / music.getDuration()) * 100)); //101
          if (second >= music.getDuration()) {
            setTime(0);
          }
        });
        if (sec >= music.getDuration()) {
          setTime(0);
          clearInterval(id);
        }
      }, 300);
    }
  }, [music]);

  const testingPlay = val => {
    Sound.setCategory('Playback');
    console.log('VALUE OF MUSIC', val);
    var whoosh = new Sound(val, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      whoosh.setVolume(1);
      // whoosh.setSpeed(2);
      console.log('volume: ' + whoosh.getVolume());
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing', count);
          count++;
          if (count <= array.length - 1) testingPlay(array[count]);
          else setCheck(false);
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
      setDuration(whoosh.getDuration());
    });
    setMusic(whoosh); 
  };
 
  const Stop = () => {
    music.stop(() => {
      // Note: If you want to play a sound after stopping and rewinding it,
      // it is important to call play() in a callback.
      // music.play();
    });
  };
  // console.log('AUDIO TESTTTTTTTTTTTTTT' , audioTests)
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <ImageBackground
        source={ImagePaths.backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginBottom: 60,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              // flex:1,
              width: 250,
              height: 250,
              backgroundColor: 'rgba(0,0,0,0.5)',
              // background-color: green;\
              borderRadius: 250 / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AnimatedCircularProgress
              size={235}
              width={9}
              backgroundWidth={30}
              fill={time}
              tintColor="#00e0ff"
              // backgroundColor="#3d5875"
            >
              {fill => (
                <>
                  <Text style={{fontSize: 18, color: 'white'}}>
                    {console.log('return time---', time)}
                    {` ${time}%`}{' '}
                  </Text>

                  {check ? (
                    <TouchableOpacity
                      onPress={() => {
                        music.pause();
                        setCheck(false);
                      }}>
                      <Icon
                        name="pause"
                        size={40}
                        color="#fff"
                        style={{marginLeft: 0}}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        music.play();
                        setCheck(true);
                      }}>
                      <Icon
                        name="play"
                        size={40}
                        color="#fff"
                        style={{marginLeft: 8}}
                      />
                    </TouchableOpacity>
                  )}
                </>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ListenAudio;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
