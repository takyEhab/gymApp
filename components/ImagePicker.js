import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ImagePicker({ route, navigation }) {
  const [data, setData] = useState('Loading')
  const { setImg } = route.params
  const getImgs = async (url) => {
    const res = await axios.get(url)
    // setImgs(JSON.stringify(res.data))
    setData(res.data)
    // res.data.map(item => item.image)
    // console.log(res.data.results)
    // res.data.map(item => console.log(item.imgage))
  }
  useEffect(() => {
    getImgs('https://wger.de/api/v2/exerciseimage/?format=json&limit=20')
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
        {data === 'Loading' ? <Text style={{ fontSize: 60, textAlign: 'center' }}>{data}</Text> :
          <FlatList
            data={data?.results}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setImg('img', item.image)
                  navigation.goBack()
                }}
                style={{

                }}
              >

                <Image
                  style={{
                    backgroundColor: 'white',
                    marginBottom: 20,
                    width: 250,
                    height: 150,
                  }}
                  resizeMode="center"
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>
            )}
          />

        }
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          reverse
          name='left'
          type='antdesign'
          disabled={data.previous == null ? true : false}
          onPress={() => {
            getImgs(data.previous)
          }}
        />
        <Icon
          reverse
          disabled={data.next == null ? true : false}
          name='right'
          type='antdesign'
          onPress={() => {
            getImgs(data.next)
          }}
        />
      </View>

    </View>
  )
}
