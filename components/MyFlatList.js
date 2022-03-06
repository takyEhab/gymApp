import React from 'react'
import { View, TouchableOpacity, FlatList, StyleSheet,Text } from "react-native"

export default function MyFlatList({  isName, data, selected, handlePress }) {
  return (
    <View style={styles.section}>

      <FlatList
        data={data}
        // numColumns={}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={selected === item.title && !item.title.props ? { ...styles.item, backgroundColor: '#f176ff' } : styles.item}
            onPress={() => handlePress(isName, item)}
          >
            <Text style={styles.title}>
              {item.title} {!isName && 'Days'}
            </Text>

          </TouchableOpacity>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  section: {
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