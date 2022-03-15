import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import { Formik } from 'formik'
import DropDownPicker from 'react-native-dropdown-picker';
import { useFormikContext } from 'formik';
import FormikChild from './FormikChild';
import * as yup from 'yup'

const exerciseSchema = yup.object({
  name: yup.string().required().min(4),
  targetMuscle: yup.string().required(),
  sets: yup.number().required().positive().integer().min(1).max(50),
  reps: yup.number().required().positive().integer().min(1).max(300),
})

export default function NewExercise({ route, navigation }) {
  const { addExercise, item } = route.params;

  const formRef = useRef()
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
      // console.log(formRef)
    }
  }

  const onFormSubmit = (values, actions) => {
    actions.resetForm()
    addExercise(values)
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
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