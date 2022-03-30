import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import { Formik } from 'formik'
import FormikChild from './FormikChild';
import * as yup from 'yup'
import { addExercise, editExercise, removeExercise } from '../store/actions';
import { useDispatch } from 'react-redux';
// /^(\d+-?)+\d+$/

const exerciseSchema = yup.object({
  name: yup.string().required().min(4),
  targetMuscle: yup.string().required(),
  sets: yup.string()
    .required()
    .matches(
      /^(\d+-|\d?)+\d+$/,
      "Input should only be number and maybe dash in between"
    ),
  reps: yup.string()
    .required()
    .matches(
      /^(\d+-|\d?)+\d+$/,
      "Input should only be number and maybe dash in between"
    )
  , img: yup.string().required()
})

export default function NewExercise({ route, navigation }) {
  const dispatch = useDispatch()
  const formRef = useRef()

  const { day, item, edit } = route.params

  const handleData = (data) => {
    dispatch(edit ? editExercise(day, data) : addExercise(day, data))
    navigation.navigate('ViewWorkout')
  }
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
    }
  }
  const handleDelete = () => {
    dispatch(removeExercise(day, item.key))
    navigation.navigate('ViewWorkout')

  }
  const onFormSubmit = (values, actions) => {
    actions.resetForm()
    handleData(values)
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{
        // backgroundColor: '#121212'
        backgroundColor: '#fff'
        , flex: 1
      }}>
        <View style={{ backgroundColor: '#121212', padding: 30, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', left: 5 }}
            onPress={() => navigation.goBack()} >
            <Icon color="white" name="left" type='antdesign' size={30} />

          </TouchableOpacity>

          <View style={styles.iconsContainer}>

            {edit && <TouchableOpacity style={{ ...styles.icon, backgroundColor: '#e80e0e' }}
              onPress={handleDelete}>
              <Icon color="white" name="close" />

              <Text style={styles.text} >Delete</Text>

            </TouchableOpacity>}

            <TouchableOpacity style={styles.icon}
              onPress={handleSubmit}>
              <Icon color="white" name="check" />

              <Text style={styles.text} >Save</Text>

            </TouchableOpacity>


          </View>


        </View>

        {/* <ScrollView> */}
        <Formik
          innerRef={formRef}
          initialValues={item ? { key: item.key, name: item.name, targetMuscle: item.targetMuscle, sets: item.sets, reps: item.reps, img: item.imgUri } : { name: '', targetMuscle: '', sets: '', reps: '', img: '' }}
          onSubmit={(values, actions) => onFormSubmit(values, actions)}
          validationSchema={exerciseSchema}
        >
          <FormikChild navigation={navigation} />
        </Formik>

        {/* </ScrollView> */}

      </View>
    </TouchableWithoutFeedback >


  )
}

const styles = StyleSheet.create({
  iconsContainer: {
    position: 'absolute',
    right: 1,
    flexDirection: 'row',

  },
  icon: {
    // position: 'absolute',
    // right: 1,
    color: 'white',
    backgroundColor: '#8C60D9',
    paddingRight: 20,
    paddingLeft: 10,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    left: 3,
    color: 'white',
    fontSize: 17.5,
  }
})