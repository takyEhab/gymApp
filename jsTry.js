console.log('---------------------------------------------------------------------')

let obj = {
  day1: [
    { key: 1, name: 'Barbell Bench press', targetMuscle: 'Chest', sets: '4', reps: '6' },
    { key: 2, name: 'Dumbbell Bench press', targetMuscle: 'Chest', sets: '3', reps: '12-15' },
    { key: 3, name: 'Dumbbell Bench press', targetMuscle: 'Chest', sets: '3', reps: '12-15' },
    { key: 4, name: 'Dumbbell Bench press', targetMuscle: 'Chest', sets: '3', reps: '12-15' },
  ],
  day2: [
    { key: 3, name: 'Lat Pulldown', targetMuscle: 'Back', sets: '3', reps: '12' }
  ]
}
const editExe = (exe, item, day) => {
  let myArray = exe[day]
  myArray.map((item, i) => {
    console.log(item)
    console.log(i)
    console.log('----------------------------------------')

  })
  const objIndex = myArray.findIndex((obj => obj.key === item.key))
  console.log(objIndex)

  myArray[objIndex] = item

  return {
    ...exe,
    [day]: myArray
  }
}
obj = editExe(obj, { key: 3, name: 'fuckOff' }, 'day1')
// console.log(obj)
