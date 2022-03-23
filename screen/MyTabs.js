import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewWorkout from "./ViewWorkout";
import { StyleSheet, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({ daysNum }) {

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          alignItems: 'center',
          justifyContent: 'center', color: 'white', fontSize: 12
        },
        tabBarItemStyle: { width: 70 },
        tabBarStyle: {
          justifyContent: 'center',
          position: 'absolute',
          top: 15,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#383737',
          borderRadius: 10,
          height: 50,
        },

        tabBarScrollEnabled: true,
        lazy: true,
        lazyPreloadDistance: 1,
        lazyPlaceholder: () => <Text style={{ color: 'white' }}>Loading</Text>


      }}

    >
      {Array.from({ length: daysNum }, (_, k) => (
        <Tab.Screen
          key={k}
          name={`Day ${k + 1}`}
        // component={ViewWorkout}
        // component={() => <ViewWorkout title='push' />}


        >

          {props => <ViewWorkout {...props} day={`day${k + 1}`} />}

        </Tab.Screen>
      ))}

    </Tab.Navigator >
  );
}

const styles = StyleSheet.create({
  shadow: {}
})