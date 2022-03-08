import React, { useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import WorkoutCreator from './WorkoutCreator';
import ExerciseItem from '../components/ExerciseItem'

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Push" children={() => <ViewWorkout title={"push (chest focused)"} />} />
      <Tab.Screen name="Pull" children={() => <ViewWorkout />} />
      <Tab.Screen name="Leg" children={() => <ViewWorkout />} />
      <Tab.Screen name="Push2" children={() => <ViewWorkout />} />
      <Tab.Screen name="Pull2" children={() => <ViewWorkout />} />
    </Tab.Navigator>
  );
}


function ViewWorkout({ title }) {
  return (
    <View style={styles.container}>
      <ScrollView >
        {/* <View> */}

        <ExerciseItem title={"Barbell Bench Press"} sets={4 + ' - ' + 5} reps={6} weight={20} />
        <ExerciseItem title={"Barbell Bench Press"} sets={4 + ' - ' + 5} reps={6} weight={20} />
        <ExerciseItem title={"Barbell Bench Press"} sets={4 + ' - ' + 5} reps={6} weight={20} />
        <ExerciseItem title={"Barbell Bench Press"} sets={4 + ' - ' + 5} reps={6} weight={20} />
        <ExerciseItem title={"Barbell Bench Press"} sets={4 + ' - ' + 5} reps={6} weight={20} />

        {/* </View> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  }
})