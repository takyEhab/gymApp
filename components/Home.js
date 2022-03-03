import { StyleSheet, View, Text, Touchable, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={{ width: 300, height: 300 }}
      />

      <View style={styles.body}>

        <View style={{ alignItems: 'center', right: 60 }}>
          <Text style={styles.infoText}>
              New{'\n'}Workout Split
          </Text>
          <Icon

            iconStyle={styles.icons}
            name='ios-add-circle-outline'
            type='ionicon'
            color='#8C60D9'
            onPress={() => navigation.navigate('workoutCreator')} />

        </View>

        <View style={{ alignItems: 'center', }}>
          <Text style={styles.infoText}>
            your{'\n'}workout splits
          </Text>

          <Icon
            iconStyle={styles.icons}
            name='list'
            type='entypo'
            color='#8C60D9'
            onPress={() => console.log('hello')} />
        </View>

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
    left: 30,
    paddingHorizontal: 25
  },
  infoText: {
    bottom: 17,
    textAlign: 'center',
    color: colors.textS,
    fontSize: 16
  },
  icons: {
    fontSize: 65
  }
});
