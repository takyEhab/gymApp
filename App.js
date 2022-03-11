import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import Home from './screen/Home'
import WorkoutCreator from './screen/WorkoutCreator';
import ViewWorkout from './screen/ViewWorkout';
import { SafeAreaView } from 'react-native-safe-area-context';

import MyTabs from './screen/MyTabs'

export default function App() {
  const Stack = createNativeStackNavigator();

  NavigationBar.addVisibilityListener(({ visibility }) => {
    if (visibility === 'visible') {
      setTimeout(() => {
        NavigationBar.setVisibilityAsync("hidden")
      }, 4000);
    }
  });
  return (
    <NavigationContainer>
      <StatusBar hidden />

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen
          name="workoutCreator"
          component={WorkoutCreator}
          options={{
            title: 'Workout program creator',
            headerStyle: {
              backgroundColor: '#8C60D9',
            },
            headerTintColor: '#dff6ff',
            headerTitleStyle: {
              alignSelf: 'center',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          //  options={{ headerShown: false }} 
          name="ViewWorkout"
          options={{
            title: 'Push/Pull/Legs',
            headerStyle: {
              backgroundColor: '#8C60D9',
              alignSelf: 'center',

            },
            headerTintColor: '#dff6ff',
            headerTitleStyle: {
              alignSelf: 'center',

              fontWeight: 'bold',

            },
          }}
        // component={MyTabs}
        >
          {props => <MyTabs {...props} daysNum={5} />}

        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
