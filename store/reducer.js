import { ActionTypes } from "./actionTypes";

const initialState = {
  day1: [
    { key: 1, name: 'Barbell Bench press', targetMuscle: 'Chest', sets: '4', reps: '6' },
    { key: 2, name: 'Dumbbell Bench press', targetMuscle: 'Chest', sets: '3', reps: '12-15' },
  ],
  day2: [
    { key: 1, name: 'Lat Pulldown', targetMuscle: 'Back', sets: 3, reps: 12 }
  ]
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EXERCISE:
      return {
        [action.payload.day]: [...state[action.payload.day], action.payload.data]
      }

    // case ActionTypes.EDIT_EXERCISE:
    //   return {
    //     [action.payload.day]: [...state[action.payload.day], action.payload.data]
    //   }

    default:
      return { ...state };
  }
}

export default reducer