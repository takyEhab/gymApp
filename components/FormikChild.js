import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useFormikContext } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';

const MUSCLES = [
  { label: 'Chest', value: 'chest' },
  { label: 'Back', value: 'back' },
  { label: 'Leg', value: 'leg' },
  { label: 'Shoulder', value: 'shoulder' },
  { label: 'Biceps', value: 'biceps' },
  { label: 'Triceps', value: 'triceps' },
  { label: 'Forearms', value: 'forearms' },
]

export default function FormikChild() {
  const props = useFormikContext()
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(MUSCLES);

  return (
    <View>
      <Text style={{ color: 'black', fontSize: 40 }}>Exercise name</Text>

      <TextInput
        placeholder='Name'
        onChangeText={props.handleChange('name')}
        value={props.values.name}
        style={{ backgroundColor: 'grey' }}
      />


      <Text style={{ color: 'black', fontSize: 40 }}>Targeted muscles</Text>

      <DropDownPicker
        autoScroll={true}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={
          (itemValue, itemIndex) => {
            setValue(itemValue)
            props.setFieldValue('targetMuscle', itemValue)
          }
        }
        setItems={setItems}
      />

      <TextInput
        placeholder='Sets'
        onChangeText={props.handleChange('sets')}
        value={props.values.sets}
        style={{ backgroundColor: 'grey' }}
        keyboardType="numeric"

      />
      <TextInput
        placeholder='Reps'
        onChangeText={props.handleChange('reps')}
        value={props.values.reps}
        style={{ backgroundColor: 'grey' }}
        keyboardType="numeric"

      />
    </View>
  )
}