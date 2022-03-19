import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import { Formik } from 'formik'
import FormikChild from '../components/FormikChild';
import * as yup from 'yup'
import { addExercise, editExercise } from '../store/actions';
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
})

export default function NewExercise({ route, navigation }) {
  const dispatch = useDispatch()
  const formRef = useRef()

  const { day, item, edit } = route.params

  const handleData = (data) => {
    dispatch(edit ? addExercise(day, data) : editExercise(day, data))
    navigation.navigate('ViewWorkout')
  }
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
    }
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


          <TouchableOpacity style={styles.topIconsContainer}
            onPress={handleSubmit}>
            <Icon color="white" name="check" />

            <Text style={{ color: 'white', fontSize: 17 }} >Save</Text>

          </TouchableOpacity>


        </View>

        {/* <ScrollView> */}
        <Formik
          innerRef={formRef}
          initialValues={item ? { name: item.name, targetMuscle: item.targetMuscle, sets: item.sets, reps: item.reps } : { name: '', targetMuscle: '', sets: '', reps: '' }}
          onSubmit={(values, actions) => onFormSubmit(values, actions)}
          validationSchema={exerciseSchema}
        >
          <FormikChild />
        </Formik>

        {/* </ScrollView> */}

      </View>
    </TouchableWithoutFeedback>


  )
}

const styles = StyleSheet.create({
  topIconsContainer: {
    position: 'absolute',
    right: 1,
    color: 'white',
    backgroundColor: '#8C60D9',
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  }
})