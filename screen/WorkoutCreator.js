import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import MyModel from '../components/MyModel'
import MyFlatList from '../components/MyFlatList'
import { useDispatch } from 'react-redux'
import { newWorkout } from '../store/actions'

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
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

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
      dispatch(newWorkout(nameSelected, daySelected))

      // console.log(nameSelected)
      // console.log(daySelected)

      navigation.navigate('ViewWorkout')
    } else {
      setError(true)
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
            color='white'
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

      {error &&
        <Text style={styles.error}>Choose Name and days</Text>
      }
      <View style={{ position: 'absolute', right: 15, bottom: 15 }}>
        <TouchableOpacity onPress={handleNext}>
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
    position: 'relative'
  },
  infoText: {
    borderStyle: 'solid',
    color: 'gray',
    fontWeight: '100',
    fontSize: 30,
    padding: 20
  },
  error: {
    color: '#c91616',
    fontSize: 20,
    top: 50,
    // marginVertical: 20,
    // marginHorizontal: 20
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

