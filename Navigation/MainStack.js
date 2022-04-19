import React from 'react';

import navigationStrings from '../Constants/NavigationStrings';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { LogBox } from 'react-native';
import Home from '../Screens/Home';
import Setting from '../Screens/Setting';
import About from '../Screens/About';
import ListenAudio from '../Screens/ListenAudio'
const Stack = createStackNavigator();


export default function () {
    LogBox.ignoreLogs([
        "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
      ]);
      
    return (
<NavigationContainer>
        <Stack.Navigator   initialRouteName={navigationStrings.HOME}  screenOptions={{
 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '400',
        },
      }} >
            <Stack.Screen
                name={navigationStrings.HOME}
                component={Home}
                options={{
                    headerShown: false
                  }}
            />

            <Stack.Screen
                name={navigationStrings.SETTINGS}
                component={Setting}
                options={{
                    title: 'Settings',
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerTransparent: true,
                    headerLeft: ()=> null,
                    // headerBackVisible:false
                  }}
               
            />

            <Stack.Screen
                name={navigationStrings.ABOUT}
                component={About}
            />

<Stack.Screen
                name={navigationStrings.PLAY}
                component={ListenAudio}
                options={{
                    title: 'Repeat',
                    headerStyle: {
                      backgroundColor: 'transparent',
                    },
                    // headerShown:false
                    headerTransparent: true,
                    
                  }}
               
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}