import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, TextInput, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { removeDay } from '../store/actions';



export default function EditTab({ navigation, day, forceUpdate }) {

  const dispatch = useDispatch()
  const handleDelete = () => {
    Alert.alert('warning', 'Are you sure you want to delete this day exercise', [
      { text: 'Yes', onPress: () => { dispatch(removeDay(day)); forceUpdate() } },
      { text: 'No' }
    ])
    // 
  }
  return (
    <View style={styles.container}>
      <Icon name='add' size={40} onPress={() => navigation.navigate('MyModal', { day })} />
      <Icon
        size={30}
        onPress={handleDelete}

        name="delete" type='material-community-icons' />

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
  },
  topIconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 4,
    top: 10,
    alignItems: 'center',
    color: 'white',
  }
})