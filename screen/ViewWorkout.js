import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Icon } from 'react-native-elements'
import EditTab from '../components/EditTab';
import ExerciseItem from '../components/ExerciseItem'
import { days } from './WorkoutCreator';


export default function ViewWorkout({ title }) {
  const [exercises, setExercises] = useState([
    { name: 'Barbell Bench Press', targetMuscle: 'Chest', sets: '4', reps: '4-6' },
    { name: 'Barbell Bench Press', targetMuscle: 'Chest', sets: '4', reps: '4-6' },
    { name: 'Barbell Bench Press', targetMuscle: '', sets: '4', reps: '4-6' },
    { name: 'Barbell Bench', targetMuscle: 'Chest', sets: '4', reps: '4-6' },
    { name: 'Barbell ', targetMuscle: 'Chest', sets: '4', reps: '4-6' },
  ])

  const addExercise = (data) => {
    setExercises(prev => [...prev, data])
    console.log(exercises)
  }
  return (
    <View style={styles.container}>

      <FlatList
      contentContainerStyle={{paddingBottom: 80}}
        data={exercises}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <ExerciseItem title={item.name} targetMuscle={item.targetMuscle} sets={item.sets} reps={item.reps} />
        )}
      />

      <EditTab addExercise={addExercise} />

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