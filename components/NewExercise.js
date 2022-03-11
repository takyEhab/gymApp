import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import { Formik } from 'formik'
import DropDownPicker from 'react-native-dropdown-picker';
import { useFormikContext } from 'formik';
import FormikChild from './FormikChild';





export default function NewExercise({ modalVisible, setModalVisible, addExercise }) {

  const formRef = useRef()
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
      setModalVisible(false)
      // console.log(formRef)
    }
  }

  // [
  //   { label: 'Apple', value: 'apple' },
  //   { label: 'Banana', value: 'banana' }
  // ]


  return (
    <Modal
      animationType="fade"
      // transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{ backgroundColor: '#121212', padding: 30, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', left: 5 }}
            onPress={() => setModalVisible(false)} >
            <Icon color="white" name="left" type='antdesign' size={30} />

          </TouchableOpacity>


          <TouchableOpacity style={styles.topIconsContainer}
            onPress={handleSubmit}>
            <Icon color="white" name="check" />

            <Text style={{ color: 'white', fontSize: 17 }} >Save</Text>

          </TouchableOpacity>


        </View>

        <View>
          <Formik
            innerRef={formRef}
            initialValues={{ name: '', targetMuscle: '', sets: 0, reps: 0 }}
            onSubmit={(values) => {
              addExercise(values)
            }}
          >
            <FormikChild />
          </Formik>

        </View>

      </View>

    </Modal>

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