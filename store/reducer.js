import { ActionTypes } from "./actionTypes";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


// const initialState = {
//   day1: [
//     { key: uuidv4(), name: 'Barbell Bench press', targetMuscle: 'Chest', sets: '4', reps: '6' },
//     { key: uuidv4(), name: 'Dumbbell Bench press', targetMuscle: 'Chest', sets: '3', reps: '12-15' },
//   ],
//   day2: [
//     { key: uuidv4(), name: 'Lat Pulldown', targetMuscle: 'Back', sets: '3', reps: '12' }
//   ]
// }

const initialState = {
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EXERCISE:
      // state[action.payload.day].some(el => el.key === action.payload.data.key) ? [item] : ''

      return {
        ...state,
        [action.payload.day]: state[action.payload.day] ?
          [...state[action.payload.day], { ...action.payload.data, key: uuidv4() }]
          : [{ ...action.payload.data, key: uuidv4() }],
      }

    case ActionTypes.EDIT_EXERCISE:
      return initialState
      // let myArray = state[action.payload.day]
      // const objIndex = myArray.findIndex((obj => obj.key == action.payload.data.key))
      // myArray[objIndex] = action.payload.data

      // return {
      //   ...state,
      //   [action.payload.day]: myArray
      //   // [action.payload.day]: [...state[action.payload.day], action.payload.data]
      // }

    default:
      return state
  }
}

export default reducer