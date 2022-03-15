import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements"


export default function Header() {
  const [dropDownMore, setDropDownMore] = useState(false)
  const [dropDownWorkouts, setDropDownWorkouts] = useState(false)

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <View >

        <TouchableOpacity style={styles.container} onPress={() => setDropDownWorkouts(!dropDownWorkouts)}>
          <Text style={{ color: '#d7d3de', fontSize: 19 }}>Push/Pull/Legs</Text>
          <Icon color='#d7d3de' name='expand-more' type='material' />

        </TouchableOpacity>
        {dropDownWorkouts &&
          <View style={{ backgroundColor: 'red', order: 1 }}>
            <Text>HI</Text>
          </View>}
      </View>


      <View >

        <TouchableOpacity
          style={styles.container2}
          onPress={() => setDropDownMore(!dropDownMore)}
        >
          <Icon
            color='#d7d3de'
            name="more-vertical" type='feather' />
        </TouchableOpacity>
        {dropDownMore &&
          <View style={{ backgroundColor: 'red' }}>
            <Text>HI</Text>
          </View>}
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3c2566',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,

  },
  container2: {
    marginLeft: 60,
    backgroundColor: '#3c2566',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,


  }
})