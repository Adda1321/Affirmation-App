// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react';
// import { Image } from 'react-native';
// import imagePath from '../Constants/ImagePaths';
// import navigationStrings from '../Constants/NavigationStrings';
// // import ExploreStack from './ExploreStack';
// // import HomeStack from './HomeStack';
// // import PorfileStack from './ProfileStack';
// import Home from '../Components/Home';
// import About from '../Components/About';
// import Setting from '../Components/Setting';
// import { NavigationContainer } from '@react-navigation/native'
// const Tab = createBottomTabNavigator();

// function TabRoutes() {


//     return (
//         <NavigationContainer>
//         <Tab.Navigator
//             initialRouteName={navigationStrings.HOME}
//             screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: 'red',
//                 tabBarInactiveTintColor: 'gray',
//                 tabBarShowLabel: false,
//                 tabBarStyle: {
//                     // position: 'absolute',
//                     // backgroundColor: '#ADD8E6',
//                     // borderRadius: 50,
//                     // bottom: 20,
//                     // marginHorizontal: 16

//                 }
//             }}
//         >
//             <Tab.Screen
//                 name={navigationStrings.HOME} component={Home}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <Image
//                                 style={{
//                                     height: 30,
//                                     width: 30,
//                                     tintColor: focused ? 'red' : 'gray'
//                                 }}
//                                 source={imagePath.icHome} />
//                         )
//                     }
//                 }}
//             />
//             <Tab.Screen
//                 name={navigationStrings.SETTINGS}
//                 component={Setting}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (

//                             <Image
//                                 style={{
//                                     // color:"#000",
//                                     height: 30,
//                                     width: 30,
//                                     tintColor: focused ? 'red' : 'gray'
//                                 }}
//                                 source={imagePath.icSetting}
//                             />
//                         )
//                     }
//                 }}
//             />

//             <Tab.Screen
//                 name={navigationStrings.ABOUT}
//                 component={About}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <Image
//                                 style={{
//                                     // color:"#000",
//                                     height: 30,
//                                     width: 30,
//                                     tintColor: focused ? 'red' : 'gray'
//                                 }}
//                                 source={imagePath.icAbout}
//                             />
//                         )
//                     }
//                 }}
//             />

//         </Tab.Navigator>
//     </NavigationContainer>
//     )
// }

// export default TabRoutes