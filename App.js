import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import Home from './screen/Home'
import WorkoutCreator from './screen/WorkoutCreator';
import MyTabs from './screen/MyTabs'
import NewExerciseModal from './components/NewExerciseModal';
import Header from './components/Header';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, persistor } from './store/storeConfig'
import { Icon } from 'react-native-elements';
import { removeWorkout } from './store/actions';
import ImagePicker from './components/ImagePicker';

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

function App() {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch()
  const state = useSelector(state => state.exercisesReducer)
  NavigationBar.addVisibilityListener(({ visibility, navigation }) => {
    if (visibility === 'visible') {
      setTimeout(() => {
        NavigationBar.setVisibilityAsync("hidden")
      }, 4000);
    }
  });

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator

        screenOptions={{

          headerStyle: {
            backgroundColor: '#744db8',
          },
          headerTintColor: '#d7d3de',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName={state.workoutInfo ? 'ViewWorkout' : 'Home'}
      >


        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />

        <Stack.Screen
          name="workoutCreator"
          component={WorkoutCreator}
          options={{
            title: 'Workout program creator'
          }}
        />

        <Stack.Screen name="ViewWorkout"
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            title: state.workoutInfo ? state.workoutInfo.name : '',
            headerLeft: () => <View></View>,
            headerRight: () => <Icon color='white' name="delete" type='material-community-icons' onPress={() => {
              Alert.alert('warning', 'Are you sure you want to delete this workout', [
                {
                  text: 'Yes', onPress: () => {
                    navigation.navigate('Home')
                    dispatch(removeWorkout())
                  }
                },
                { text: 'No' }
              ])
            }} />
          })}

        >
          {props => <MyTabs {...props} daysNum={state.workoutInfo ? state.workoutInfo.days : 1} />}
        </Stack.Screen>

        <Stack.Screen options={{ presentation: 'modal', headerShown: false }} name="newExerciseModal" component={NewExerciseModal} />

        <Stack.Screen options={{ presentation: 'modal' }} name="imagePickerModal" component={ImagePicker} />
      </Stack.Navigator >
    </NavigationContainer >

  )
}

