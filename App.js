import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import Home from './screen/Home'
import WorkoutCreator from './screen/WorkoutCreator';
import MyTabs from './screen/MyTabs'
import NewExercise from './screen/NewExercise';
import Header from './components/Header';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from './store/storeConfig'

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
  const state = useSelector(state => state.exercisesReducer)
  NavigationBar.addVisibilityListener(({ visibility }) => {
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
            alignSelf: 'center',
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Home"
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
          options={{ title: state.workoutInfo.name }}// update according to database
        // options={{ title: "PPL" }}// update according to database
        // options={{
        //   headerTitle: (props) => <Header {...props} />
        // }}

        >
          {props => <MyTabs {...props} daysNum={state.workoutInfo.days} />}
          {/* {props => <MyTabs {...props} daysNum={5} />} */}
        </Stack.Screen>

        <Stack.Screen options={{ presentation: 'modal', headerShown: false }} name="MyModal" component={NewExercise} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

