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
  workoutInfo: { name: 'Push/pull/legs', days: 5 }
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.NEW_WORKOUT:
      const { name, days } = action.payload
      return {
        ...state,
        workoutInfo: { name, days }
      }

    case ActionTypes.ADD_EXERCISE:
      return {
        ...state,
        [action.payload.day]: state[action.payload.day] ?
          [...state[action.payload.day], { ...action.payload.data, key: uuidv4() }]
          : [{ ...action.payload.data, key: uuidv4() }],
      }

    case ActionTypes.EDIT_EXERCISE:
      let myArray = state[action.payload.day]
      // myArray.map((item, i) => {
      //   console.log(item)
      //   console.log(i)
      //   console.log('----------------------------------------')

      // })
      const objIndex = myArray.findIndex((obj => obj.key === action.payload.data.key))
      // console.log(objIndex)
      // console.log(action.payload.data)
      myArray[objIndex] = action.payload.data

      return {
        ...state,
        [action.payload.day]: myArray
      }

    case ActionTypes.REMOVE_EXERCISE:
      // return state.tasks.filter((item) => item !== task)
      return {
        ...state,
        [action.payload.day]: state[action.payload.day].filter((item) => item.key !== action.payload.key)
      }
    case ActionTypes.REMOVE_DAY:
      delete state[action.payload]
      return state

    // const day = action.payload
    // return state.tasks.filter((item) => item !== task)

    default:
      return state
  }
}

export default reducer