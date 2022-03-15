import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import { Formik } from 'formik'
import NewExercise from './NewExercise'

export default function EditTab({ addExercise, navigation }) {

  return (
    <View style={styles.container}>
      <Icon name='add' size={40} onPress={() => navigation.navigate('MyModal', {
        addExercise,
        // otherParam: 'anything you want here',
      })} />
      <Icon
        size={30}
        name="more-vertical" type='feather' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // backgroundColor: 'white',
    // // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // opacity:0.3,
    backgroundColor: '#9d4edd',
    flexDirection: 'row',
    position: 'absolute',
    fontSize: 15,
    color: 'white',
    borderRadius: 20,

    // marginHorizontal: 90,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: -100,
    height: 60,
    bottom: 20,
    width: 200,
    left: '50%',
    right: '25%',

    // textAlign: 'center',
    // flex: 1
  },
  // text: {
  //   color: 'white',
  //   paddingHorizontal: 10
  // },
  // editText: {
  //   position: 'absolute',
  // }
  topIconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 4,
    top: 10,
    alignItems: 'center',
    color: 'white',
  }
})