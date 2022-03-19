import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function ExerciseItem({ item, navigation, day }) {

  const [isVolumeEdit, setVolumeEdit] = useState(false)
  return (
    <View style={styles.card}>
      <Image style={styles.exerciseImg} source={require('../assets/bench-press-1-1000x1000.jpg')} />
      {/* <View style={{ width: 100, backgroundColor: 'red' }}></View> */}

      <Text style={styles.exerciseName}>
        {item.name}
        {'\n'}
        <Text style={styles.muscles}>
          {item.targetMuscle}
        </Text>
      </Text>
      <TouchableOpacity style={styles.volumeInfo}
        onPress={() => setVolumeEdit(!isVolumeEdit)}
      >
        <View style={styles.setInfo}>
          <Text style={styles.textInfo} >sets: {!isVolumeEdit && item.sets}</Text>

          {
            isVolumeEdit &&
            <TextInput style={styles.textInput}
              value={item.sets.toString()} />

          }
        </View>

        <View style={styles.setInfo}>

          <Text style={styles.textInfo} >reps: {!isVolumeEdit && item.reps} </Text>
          {
            isVolumeEdit &&
            <TextInput style={styles.textInput}
              value={item.reps.toString()} />

          }
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editIcon} onPress={
        () => navigation.navigate('MyModal', { day, item, edit: true })
      }>
        <Icon
          size={12}
          reverse
          color="#8C60D9"
          name='edit'
          type="font-awesome-5"
        />
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
    height: 170,
    overflow: 'hidden'

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
  },
  exerciseName: {
    fontSize: 20,
    top: 25,
    width: 200,
    left: 120,
    position: 'absolute',
    color: 'white',
    opacity: 0.8,
    // backgroundColor:'red'
  },
  muscles: {
    fontSize: 15,
    color: 'white',
    lineHeight: 40
  },
  exerciseImg: {
    width: 100,
    height: 90,
    position: 'absolute',
    left: 12,
    borderRadius: 10,
    top: 20

  }, editIcon: {
    position: 'absolute',
    top: 0,
    right: 0
  },
})