import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Icon } from 'react-native-elements'
import MyModel from './MyModel'
// const getDays = () => {
// }
// const horizontalFlatList = () => {
//   return (
//     <View></View>
//   )

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
  const [nameSelected, setNameSelected] = useState({})
  const [daySelected, setDaySelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const [names, setNames] = useState(NAMES)

  const addName = (newName) => {
    setNames([{ title: newName }, ...NAMES])
    setNameSelected(newName)
  }
  return (


      <View style={styles.container}>

        <Text style={styles.infoText}>Name</Text>
        <View style={styles.daysSection}>

          <FlatList
            data={
              [{
                title: <Icon
                  name='add'
                  type='ionicon'
                  color='#517fa4'
                />
              }, ...names]
            }
            // numColumns={}
            keyExtractor={(item, i) => i.toString()}
            showsHorizontalScrollIndicator={true}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={nameSelected === item.title && !item.title.props ? { ...styles.item, backgroundColor: '#f176ff' } : styles.item}
                onPress={() => {
                  setNameSelected(item.title)
                  // if icon 
                  if (item.title.props) setModalVisible(true)
                }}
              >
                <Text style={styles.title}>
                  {item.title}
                </Text>

              </TouchableOpacity>
            )}
          />
        </View>


        <MyModel setModalVisible={setModalVisible} addName={addName} modalVisible={modalVisible} />



 
        <Text style={styles.infoText}>Days weekly</Text>
        <View style={styles.daysSection}>

          <FlatList
            data={days}
            showsHorizontalScrollIndicator={true}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={daySelected === item.title ? { ...styles.item, backgroundColor: '#f176ff' } : styles.item}
                onPress={() => setDaySelected(item.title)}
              >
                <Text style={styles.title}>
                  {item.title} Days

                </Text>
              </TouchableOpacity>
            )}
          />
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
    // flex: 1,
    borderStyle: 'solid',
    // backgroundColor: 'red',
    // marginVertical: 8,
    // marginHorizontal: 10,
    color: 'gray',
    fontWeight: '100',
    // color: '#F9F9F9',
    // color: '#dff6ff',
    fontSize: 30,
    padding: 20
  },
  daysSection: {
    marginHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontSize: 12,

  },

})