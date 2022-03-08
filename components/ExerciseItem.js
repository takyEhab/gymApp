import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function ExerciseItem({ title, sets, reps, weight }) {
  const [isVolumeEdit, setVolumeEdit] = useState(false)
  return (
    <View style={styles.card}>
      <Image style={styles.exerciseImg} source={require('../assets/bench-press-1-1000x1000.jpg')} />
      {/* <View style={{ width: 100, backgroundColor: 'red' }}></View> */}
      <TouchableOpacity style={styles.editIcon} onPress={() => console.log('hello')}>
        <Icon
          size={12}
          reverse
          color="#8C60D9"
          name='edit'
          type="font-awesome-5"
        />
      </TouchableOpacity>



      <Text style={styles.exerciseName}>
        {title}
        {'\n'}
        <Text style={styles.muscles}>
          Chest, Tricep
        </Text>
      </Text>
      <TouchableOpacity style={styles.volumeInfo}
        onPress={() => setVolumeEdit(!isVolumeEdit)}
      >
        <View style={styles.setInfo}>
          <Text style={styles.textInfo} >sets: {!isVolumeEdit && sets}</Text>

          {
            isVolumeEdit &&
            <TextInput style={styles.textInput}
              value={sets.toString()} />

          }
        </View>

        <View style={styles.setInfo}>

          <Text style={styles.textInfo} >reps: {!isVolumeEdit && reps} </Text>
          {
            isVolumeEdit &&
            <TextInput style={styles.textInput}
              value={reps.toString()} />

          }
        </View>

      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#372b4f',
    flexDirection: 'row',
    position: 'relative',
    margin: 10,
    paddingVertical: 30,
    alignItems: 'center',
    fontSize: 15,
    color: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    height: 170
  },
  volumeInfo: {
    backgroundColor: '#6B5891',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 1,
    borderRadius: 10,
    // margin: 5,
  }, setInfo: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  }, textInput: {

    borderRadius: 6,
    backgroundColor: 'white',
    height: 25,
    // margin: 12,
    width: 75,
    borderWidth: 1,
    paddingHorizontal: 10,
  }, textInfo: {
    fontSize: 19
  }, muscles: {
    opacity: 0.5,
    fontSize: 15,
    // top : 10 , right : 20, position: 'absolute',
    color: 'white',
    lineHeight: 40
  }, exerciseName: {
    fontSize: 20,
    top: 25,
    right: 30,

    position: 'absolute',
    color: 'white', opacity: 0.8,
    // margin: 30,
    // backgroundColor:'red'
  }, editIcon: {
    position: 'absolute',
    top: 0,
    right: 0
  }, exerciseImg: {
    width: 100,
    height: 90,
    position: 'absolute',
    left: 12,
    borderRadius: 10,
    top: 20

  }
})