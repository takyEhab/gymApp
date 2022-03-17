import { ActionTypes } from "./actionTypes";

const addExercise = (day, data) => {
  return {
    type: ActionTypes.ADD_EXERCISE,
    payload: { day, data }
  }
}


export { addExercise }