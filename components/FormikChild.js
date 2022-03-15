import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useFormikContext } from 'formik';
import SelectBox from 'react-native-multi-selectbox'
// import DropDown from './comp';

const MUSCLES = [
  { item: 'Chest' },
  { item: 'Back' },
  { item: 'Leg' },
  { item: 'Shoulder' },
  { item: 'Biceps' },
  { item: 'Triceps' },
  { item: 'Forearms' }
]

export default function FormikChild() {
  const formik = useFormikContext()

  const [selectedMuscle, setSelectedMuscle] = useState({ item: formik.values.targetMuscle })

  return (
    <View>
      <Text style={{ color: 'black', fontSize: 20 }}>Exercise name</Text>

      <TextInput
        placeholder='Name'
        onChangeText={formik.handleChange('name')}
        value={formik.values.name}
        style={{ backgroundColor: 'grey' }}
        onBlur={formik.handleBlur('name')}
      />

      <Text style={{ color: 'red' }}>{formik.touched.name && formik.errors.name}</Text>

      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>Targeted muscles</Text>
        <SelectBox
          label="Muscles"
          options={MUSCLES}
          value={selectedMuscle}
          onChange={(val) => {
            setSelectedMuscle(val)
            formik.setFieldValue('targetMuscle', val.item, true)
          }
          }
          // hideSearch={true}
          hideInputFilter={true}
        />
        <Text style={{ color: 'red' }}>{formik.touched.targetMuscle && formik.errors.targetMuscle}</Text>

      </View>

      <View style={styles.setsAndRepsContainer}>

        <TextInput
          placeholder='Sets'
          onChangeText={formik.handleChange('sets')}
          value={formik.values.sets}
          style={styles.setsAndReps}
          keyboardType="numeric"
          onBlur={formik.handleBlur('sets')}

        />
        <TextInput
          placeholder='Reps'
          onChangeText={formik.handleChange('reps')}
          value={formik.values.reps}
          style={styles.setsAndReps}
          keyboardType="numeric"
          onBlur={formik.handleBlur('reps')}

        />
      </View>
      {/* {
        isInteger(formik.values.reps) &&
        Array.from({ length: parseInt(formik.values.reps) }, (_, k) => ( */}


      <TextInput
        placeholder='Weight'
        onChangeText={formik.handleChange('reps')}
        value={formik.values.reps}
        style={styles.setsAndReps}
        keyboardType="numeric"
        onBlur={formik.handleBlur('reps')}
      />
      {/* ))
      } */}

      <Text style={{ color: 'red' }}>{formik.touched.sets && formik.errors.sets}</Text>
      <Text style={{ color: 'red' }}>{formik.touched.reps && formik.errors.reps}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  setsAndRepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  setsAndReps: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  }
})