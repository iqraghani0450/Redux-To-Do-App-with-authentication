import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import Login from '../screens/Login';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';
import SinglePost from '../screens/SinglePost';
import Todo from '../screens/Todo';
import Splash from '../screens/Splash';

const Navigation = () => {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()

  const TabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return (
                <Image style={{ height: "100%", width: "30%" }} source={require('../resources/Images/P.png')} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarIcon: () => {
              return (
                <Image style={{ height: "100%", width: "55%" }} source={require('../resources/Images/poppedHeart.png')} />
              )
            }
          }}
        />
        <Tab.Screen
          name="ToDo"
          component={Todo}
          options={{
            tabBarIcon: () => {
              return (
                <Image style={{ height: "100%", width: "43%" }} source={require('../resources/Images/openNow.png')} />
              )
            }
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
        />
        <Stack.Screen
          name="SinglePost"
          component={SinglePost}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;