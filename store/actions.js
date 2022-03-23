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
const newWorkout = (name, days) => {
  return {
    type: ActionTypes.NEW_WORKOUT,
    payload: { name, days }
  }
}
const removeDay = (day) => {
  return {
    type: ActionTypes.REMOVE_DAY,
    payload: day
  }
}
const removeExercise = (day, key) => {
  return {
    type: ActionTypes.REMOVE_EXERCISE,
    payload: { day, key }
  }
}
const removeWorkout = () => {
  return {
    type: ActionTypes.REMOVE_WORKOUT
  }
}
export { addExercise, editExercise, removeDay, removeExercise, newWorkout, removeWorkout }