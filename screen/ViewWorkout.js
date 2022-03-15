import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Icon } from 'react-native-elements'
import EditTab from '../components/EditTab';
import ExerciseItem from '../components/ExerciseItem'
import { days } from './WorkoutCreator';


export default function ViewWorkout({ title, navigation }) {
  const [exercises, setExercises] = useState([])

  const addExercise = (data) => {
    setExercises(prev => [data, ...prev])
    console.log(exercises)
    navigation.navigate('ViewWorkout')
  }
  return (
    <View style={styles.container}>

      <FlatList
        contentContainerStyle={{ paddingBottom: 80 }}
        data={exercises}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => <ExerciseItem item={item} navigation={navigation} />}
      />

      <EditTab addExercise={addExercise} navigation={navigation} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 70,
    position: 'relative'
  }
})