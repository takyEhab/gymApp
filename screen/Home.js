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
        position: 'absolute', bottom: 200,
        // margin: 'auto', width: 'auto',

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

      {/* </View> */}
      {/* <View style={styles.body}>

        <View style={{}}>

          <Icon
            size={100}
            name='ios-add-circle-outline'
            type='ionicon'
            color='#8C60D9'
            onPress={() => navigation.navigate('workoutCreator')} />
          <Text style={styles.infoText}>
            New{'\n'}Workout Split
          </Text>
        </View> */}
      {/* 
        <View>
          <Text style={styles.infoText}>
            your{'\n'}workout splits
          </Text>

          <Icon
            iconStyle={styles.icons}
            name='list'
            type='entypo'
            color='#8C60D9'
            onPress={() => navigation.navigate('ViewWorkout')} />
        </View>
 */}
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
    color: colors.textS,
    fontSize: 20
  },
});
