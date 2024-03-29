import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import EditTab from '../components/EditTab';
import ExerciseItem from '../components/ExerciseItem'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise } from '../store/actions'

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export default function ViewWorkout({ day, navigation }) {
  const state = useSelector(state => state.exercisesReducer)
  const forceUpdate = useForceUpdate();

  return (
    <View style={styles.container}>

      <FlatList
        contentContainerStyle={{ paddingBottom: 80 }}
        // data={state[day] ? state[day] : []}
        data={state[day]}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => <ExerciseItem item={item} day={day} navigation={navigation} />}
      />
      <EditTab navigation={navigation} day={day} forceUpdate={forceUpdate} />

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