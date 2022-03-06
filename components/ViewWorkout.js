import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ViewWorkout() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.text}>push "chest focused"</Text>
        <View>
          <View style={styles.card}>
            {/* <Image style={{ width: 70, height: 50,  }} source={require('../assets/bench-press-1-1000x1000.jpg')}/> */}
            <Text style={{ fontSize: 15, color: 'white', marginHorizontal: 20 }}>
              bench press
              {'\n'}

            </Text>
            <View style={styles.cardInfo}>
              <Text style={{ flex: 1, textAlign: 'center' }}>sets: 3-4</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>reps: 8 </Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>Last wight : 20 Kg</Text>
            </View>
            <View><Text>chest</Text></View>

          </View>

          {/* 
          <View style={styles.card}>
            <Image style={{ width: 70, height: 50,  }} source={require('../assets/bench-press-1-1000x1000.jpg')}/>
            <Text style={{fontSize: 15, color: 'white', marginHorizontal:20 }}>
              bench press
              {'\n'}
              sets: 3-4 reps: 8

            </Text>

          </View> */}


        </View>

        <Text style={styles.text}>Day 2</Text>

        <Text style={styles.text}>Day 3</Text>

        <Text style={styles.text}>Day 4</Text>

        <Text style={styles.text}>Day 5</Text>

        <Text style={styles.text}>Day 6</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  text: {
    padding: 30,
    fontSize: 30,
    color: 'white'

  }, textInfo: {
    fontSize: 15,
    color: '#F8F8F8',
  },
  card: {
    backgroundColor: '#372b4f',
    flexDirection: 'row',
    position: 'relative',
    margin: 10,
    paddingVertical: 30,
    alignItems: 'center',

    fontSize: 15,
    color: 'white',
    borderRadius: 20,
    justifyContent: 'center'
  },
  cardInfo: {
    backgroundColor: '#6B5891',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',

    alignItems: 'center',
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    // borderColor: '',
    borderRadius: 10,
    // margin: 5,
  }
}) 