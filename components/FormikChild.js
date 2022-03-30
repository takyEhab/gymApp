import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Modal } from 'react-native'
import { useFormikContext } from 'formik';
import SelectBox from 'react-native-multi-selectbox'
import { TouchableOpacity } from 'react-native';

const MUSCLES = [
  { item: 'Chest' },
  { item: 'Back' },
  { item: 'Leg' },
  { item: 'Shoulder' },
  { item: 'Biceps' },
  { item: 'Triceps' },
  { item: 'Forearms' }
]

export default function FormikChild({ navigation }) {
  const formik = useFormikContext()
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState({ item: formik.values.targetMuscle })
  const [img, setImg] = useState('')

  return (
    <View>
      {/* <Text style={{ color: 'black', fontSize: 20 }}>Exercise name</Text> */}

      <TextInput
        placeholder='Exercise name'
        onChangeText={formik.handleChange('name')}
        value={formik.values.name}
        style={{ marginTop: 20, width: '100%', height: 50, fontSize: 18, padding: 10, }}
        placeholderTextColor="#aab"
        onBlur={formik.handleBlur('name')}
      />
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1.5,
          marginHorizontal: 10,
        }}
      />

      <Text style={{ color: 'red' }}>{formik.touched.name && formik.errors.name}</Text>


      <TouchableOpacity
        style={{ backgroundColor: '#8C60D9', }}
        onPress={() => navigation.navigate('imagePickerModal', { setImg: formik.setFieldValue })}>
        <Text style={{ fontSize: 23, color: '#444', margin: 10, textAlign: 'center' }}>Exercise Image</Text>
      </TouchableOpacity>


      <Text style={{ color: 'red' }}>{formik.touched.img && formik.errors.img}</Text>

      <View style={{ margin: 30, }}>
        {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Targeted muscles</Text> */}
        <SelectBox
          label="Targeted muscles"
          options={MUSCLES}
          value={selectedMuscle}
          onChange={(val) => {
            setSelectedMuscle(val)
            formik.setFieldValue('targetMuscle', val.item, true)
          }
          }
          hideInputFilter={true}
          labelStyle={{ fontSize: 23, color: '#444', marginBottom: 8 }}
          // containerStyle={{  }}
          containerStyle={{
            paddingHorizontal: 10, alignItems: 'center',
            borderRadius: 20, borderColor: 'black'
          }}
        // selectedItemStyle={{ color: 'white' }}
        // listEmptyLabelStyle={{ color: 'gray' }}
        />
        <Text style={{ color: 'red' }}>{formik.touched.targetMuscle && formik.errors.targetMuscle}</Text>

      </View>

      <View style={styles.setsAndRepsContainer}>
        <Text style={{ fontSize: 20, color: '#000', position: 'absolute', top: 1 }}>Sets Reputation</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder='Sets'
            onChangeText={formik.handleChange('sets')}
            value={formik.values.sets}
            style={styles.setsAndReps}
            keyboardType="numeric"
            onBlur={formik.handleBlur('sets')}
            placeholderTextColor="#eee"

          />
          <TextInput
            placeholder='Reps'
            onChangeText={formik.handleChange('reps')}
            value={formik.values.reps}
            style={styles.setsAndReps}
            keyboardType="numeric"
            onBlur={formik.handleBlur('reps')}
            placeholderTextColor="#eee"
          />

        </View>

        <Text style={{ color: 'red' }}>{formik.touched.sets && formik.errors.sets}</Text>
        <Text style={{ color: 'red' }}>{formik.touched.reps && formik.errors.reps}</Text>

      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  setsAndRepsContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#c8c3d8',
    paddingVertical: 40,
    // marginHorizontal: 30,
    // borderRadius: 30,
  },
  setsAndReps: {
    backgroundColor: '#8C60D9',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    textAlign: 'center'

  }
})