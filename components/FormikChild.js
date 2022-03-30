import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import { useFormikContext } from 'formik';
import SelectBox from 'react-native-multi-selectbox'
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

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



      {formik.values.img ?

        <TouchableOpacity
          onPress={() => navigation.navigate('imagePickerModal', { setImg: formik.setFieldValue })}

          style={{
            // width: 250,
            // height: 150,
            position: 'relative',
            alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 30, marginBottom: 20
          }}>

          <Image
            style={{
              backgroundColor: 'white',
              marginBottom: 20,
              width: 250,
              height: 150,
            }}
            resizeMode="center"
            source={{ uri: formik.values.img }}
          />
        </TouchableOpacity>
        :
        <View
          style={{
            // backgroundColor: '#8C60D9',
            // flexDirection: 'row',
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',

          }}>
          <Icon
            onPress={() => navigation.navigate('imagePickerModal', { setImg: formik.setFieldValue })}
            size={30}
            name='image-plus' type='material-community' raised color='purple' />
          <Text style={{ fontSize: 16, color: '#444', margin: 1, textAlign: 'center' }}>Choose Image</Text>
        </View>
      }


      <Text style={{ color: 'red' }}>{formik.touched.img && formik.errors.img}</Text>
      {/* <Text>
        {formik.values.name}
      </Text> */}
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