import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import Home from './components/Home'
import WorkoutCreator from './components/WorkoutCreator';


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
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
