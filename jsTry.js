console.log('---------------------------------------------------------------------')
let obj = {
  day1: [
    { key: 1, name: 'Barbell Bench press', targetMuscle: 'Chest', sets: '4', reps: '6' },
    { key: 2, name: 'Dumbbell Bench press', targetMuscle: 'Chest', sets: '3', reps: '12-15' },
  ],
  day2: [
    { key: 3, name: 'Lat Pulldown', targetMuscle: 'Back', sets: '3', reps: '12' }
  ]
}
const editExe = (exe, item, day) => {
  let myArray = exe[day]
  const objIndex = myArray.findIndex((obj => obj.key == item.key))
  myArray[objIndex + 1] = item

  return {
    ...exe,
    [day]: myArray
  }
}
obj = editExe(obj, { key: 1, name: 'fuckOff' }, 'day1')
console.log(obj)
