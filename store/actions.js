import { ActionTypes } from "./actionTypes";

const addExercise = (day, data) => {
  return {
    type: ActionTypes.ADD_EXERCISE,
    payload: { day, data }
  }
}

const editExercise = (day, data) => {
  return {
    type: ActionTypes.EDIT_EXERCISE,
    payload: { day, data }
  }
}

export { addExercise, editExercise }