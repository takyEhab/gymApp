import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import MyModel from '../components/MyModel'
import MyFlatList from '../components/MyFlatList'

let days = []

for (let i = 2; i <= 6; i++) {
  days.push({ title: i, key: i })
}
const NAMES = [
  { title: 'Full Body' },
  { title: 'Bro split' },
  { title: 'Upper/Lower' },
  { title: 'Push/Pull/Legs' },
  { title: 'Upper/Lower/Push/Pull/Legs' }
]


export default function WorkoutCreator({ navigation }) {
  const [nameSelected, setNameSelected] = useState(null)
  const [daySelected, setDaySelected] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [names, setNames] = useState(NAMES)

  const addName = (newName) => {
    setNames([{ title: newName }, ...NAMES])
    setNameSelected(newName)
  }

  const handlePress = (isName, item) => {
    if (isName) {
      setNameSelected(item.title)
      // if icon 
      if (item.title.props) setModalVisible(true)
    } else {
      setDaySelected(item.title)
    }
  }

  const handleNext = () => {
    if (daySelected && nameSelected) {
      console.log('hello')
      navigation.navigate('ViewWorkout')
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.infoText}>Name</Text>
      <MyFlatList
        data={[{
          title: <Icon
            name='add'
            type='ionicon'
            color='#517fa4'
          />
        }, ...names]}
        selected={nameSelected}
        handlePress={handlePress}
        isName={true}
      />

      <MyModel setModalVisible={setModalVisible} addName={addName} modalVisible={modalVisible} />

      <Text style={styles.infoText}>Days weekly</Text>

      <MyFlatList
        data={days}
        selected={daySelected}
        handlePress={handlePress}
        isName={false}
      />


      <View style={{ left: 280, top: 270 }}>
        <TouchableOpacity
          onPress={handleNext}
        >

          <Icon
            reverse
            name='right'
            type='antdesign'
            color='#517fa4'
          />
        </TouchableOpacity>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  infoText: {
    borderStyle: 'solid',
    color: 'gray',
    fontWeight: '100',
    fontSize: 30,
    padding: 20
  },
})

