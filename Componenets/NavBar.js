import {StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React from 'react';
import navigationStrings from '../Constants/NavigationStrings';
import ImagePaths from '../Constants/ImagePaths';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../utilities';

const NavBar = (props) => {
    // console.log(props)
    const {navigation} = props.navigation
  return (
    <View style={styles.bottom}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.HOME)}
          style={[styles.circle]}>
          <Icon name="home" size={20} color="#fff" style={styles.Icons} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.SETTINGS)}
          style={[styles.circle, {}]}>
          <Icon name="gear" size={20} color="#fff" style={styles.Icons} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.ABOUT)}
          style={[styles.circle, {}]}>
          <Icon name="info" size={20} color="#fff" style={styles.Icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    // backgroundColor:"yellow",
    flex: 1,
    alignItems: 'center',

    justifyContent: 'flex-end',
  },
  Icon: {
    height: 40,
    width: 40,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  circle: {
    width: 49,
    height: 49,
    borderRadius: 49 / 2,
    backgroundColor: Colors.Secondary_Color,
    zIndex: 1,
    // opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    //  backgroundColor: "lightgrey",
    backgroundColor: 'rgba(116,156,156 , 0.4)',
    width: '80%',
    marginBottom: 30,
    height: 60,
    paddingHorizontal: 10,
    // opacity: 0.7,

    borderRadius: 300,
  },
  Icons: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
});
