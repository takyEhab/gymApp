import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
// const getDays = () => {
// }
// const horizontalFlatList = () => {
//   return (
//     <View></View>
//   )

let days = []
let names = [
  'Custom name',
  'Full Body',
  'Bro split',
  'Upper/Lower',
  'Push/Pull/Legs',
  'Upper/Lower/Push/Pull/Legs',
]

const createData = (arr) => {
  if (arr[0]) {
    arr.forEach((item, i, arr) => {
      arr[i] = { title: item, key: i }
    })
  } else {
    for (let i = 2; i <= 6; i++) {
      arr.push({ title: i, key: i })
    }
  }
  return arr
}

days = createData(days)
names = createData(names)

export default function WorkoutCreator({ navigation }) {
  const [day, setDay] = useState('')
  const dayHandler = (key) => setDay(key)

  return (
    <View style={styles.container}>

      <Text style={styles.infoText}>Name</Text>
      <View style={styles.daysSection}>

        <FlatList
          data={names}
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={day === item.key ? { ...styles.item, backgroundColor: '#f176ff' } : styles.item}
              onPress={() => dayHandler(item.key)}
            >


              {item.title == 'Custom name' ?
                <Icon
                onPress={() => console.log('hello')}
                  name='add'
                  type='ionicon'
                  color='#517fa4'
                // style={{right:5}}
                /> :
                <Text style={styles.title}>
                  {item.title}
                </Text>}



            </TouchableOpacity>
          )}
        />
      </View>

      <Text style={styles.infoText}>Days weekly</Text>
      <View style={styles.daysSection}>

        <FlatList
          data={days}
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={day === item.key ? { ...styles.item, backgroundColor: '#f176ff' } : styles.item}
              onPress={() => dayHandler(item.key)}
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