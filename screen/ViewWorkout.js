import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View, Text, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import EditTab from '../components/EditTab';
import ExerciseItem from '../components/ExerciseItem'
import { days } from './WorkoutCreator';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ViewWorkout({ title, navigation }) {
  const [exercises, setExercises] = useState([
    // { name: 'Bench Press', targetMuscle: 'Chest', sets: 4, reps: 6 }
  ])
  useEffect(async () => {
    const data = await getData()
    setExercises(data ? data : [])

  }, [])

  const storeData = async (value) => {
    try {
      const prevData = await getData()
      const jsonValue = JSON.stringify(prevData ? [...prevData, value] : [value])
      // const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
      console.error(e)

    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
      // jsonValue != null ? console.log(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
      console.error(e)
    }
  }


  const addExercise = (data) => {

    storeData(data)
    setExercises((prev) => {

      return [data, ...prev]
    }

    )

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

      <EditTab clearStorage={async () => await AsyncStorage.clear()} addExercise={addExercise} navigation={navigation} />

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