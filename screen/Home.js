// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { StyleSheet, View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-elements';

// export default function Home({ navigation }) {
//   const [data, setData] = useState({})

//   const getImgs = async (url) => {
//     const res = await axios.get(url)
//     // setImgs(JSON.stringify(res.data))
//     setData(res.data)
//     // res.data.map(item => item.image)
//     // console.log(res.data.results)
//     // res.data.map(item => console.log(item.imgage))
//   }
//   useEffect(() => {
//     getImgs('https://wger.de/api/v2/exerciseimage/?format=json&limit=20')
//   }, [])
//   return (
//     <View style={styles.container}>
//       <View style={{ flexDirection: 'row' }}>

//         <Icon
//           reverse
//           name='left'
//           type='antdesign'
//           disabled={data.previous == null ? true : false}
//           onPress={() => {
//             getImgs(data.previous)
//           }}
//         />
//         <Icon
//           reverse
//           disabled={data.next == null ? true : false}
//           name='right'
//           type='antdesign'
//           onPress={() => {
//             getImgs(data.next)
//           }}
//         />
//       </View>

//       <FlatList
//         data={data?.results}
//         keyExtractor={(item, i) => i.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity

//             style={{
//               backgroundColor: 'white',
//               marginBottom: 20,
//             }}
//           >

//             <Image
//               style={{
//                 width: 200,
//                 height: 100,
//               }}
//               resizeMode="center"
//               source={{ uri: item.image }}
//             />
//           </TouchableOpacity>

//         )}
//       />

//     </View>
//   )
// }
import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={{ position: 'absolute', top: 175, width: 300, height: 300 }}
      />

      <View style={{
        position: 'absolute', bottom: 200
      }}>
        <Icon
          iconStyle={{ left: 6 }}
          size={100}
          name='ios-add-circle-outline'
          type='ionicon'
          color='#8C60D9'
          onPress={() => navigation.navigate('workoutCreator')} />
        <Text style={styles.infoText}>
          ADD{'\n'}WORKOUT
        </Text>
      </View>
    </View >
  );
}

const colors = {
  primary: '#311b92', secondary: '#2d31fa', textP: '#ffffff', textS: '#dff6ff'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    bottom: 65,
    flexDirection: 'row',
    // left: 30,
    justifyContent: 'space-around',

    paddingHorizontal: 25
  },
  infoText: {
    textAlign: 'center',
    color: '#dff6ff',
    fontSize: 17.5
  },
});
