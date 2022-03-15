const exercises = [
  {
    'push': [
      { name: 'Barbell Bench Press', targetMuscle: 'Chest', sets: '4', reps: '4-6' },
      { name: 'Barbell Bench Press', targetMuscle: 'Chest', sets: '4', reps: '4-6' },
      { name: 'Barbell Bench Press', targetMuscle: '', sets: '4', reps: '4-6' },
      { name: 'Barbell Decline Bench Press', targetMuscle: 'Chest', sets: '4', reps: '4-6' },
      { name: 'skull crusher', targetMuscle: 'Triceps', sets: '4', reps: '4-6' }
    ]
  },
  {
    'pull': [
      { name: 'Dead lift', targetMuscle: 'Back', sets: '4', reps: '6' },
    ]
  },
  {
    'legs': [
      { name: 'Leg extension', targetMuscle: 'Leg', sets: '4', reps: '6' }
    ]
  }
]

exercises.map(item => console.log(Object.keys(item))) 