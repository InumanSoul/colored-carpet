export const colors = [
  {
    name: 'red',
    className: 'bg-red-500'
  },
  {
    name: 'green',
    className: 'bg-green-500'
  },
  {
    name: 'blue',
    className: 'bg-blue-500'
  },
  {
    name: 'yellow',
    className: 'bg-yellow-300'
  }
]

export const positions = [
  {
    name: 'top-left',
    className: 'row-start-1 col-start-2'
  },
  {
    name: 'top-right',
    className: 'row-start-1 col-start-2'
  },
  {
    name: 'bottom-left',
    className: 'row-start-2 col-start-1'
  },
  {
    name: 'bottom-right',
    className: 'row-start-2 col-start-2'
  }
]

export const itemsPerLevel = {
  1: 1,
  2: 2,
  3: 3,
  4: 3
}

export const difficulties = [
  {
    name: 'easy',
    action: 'Fácil',
    value: 1
  },
  {
    name: 'normal',
    action: 'Normal',
    value: 2
  },
  {
    name: 'medium',
    action: 'Intermedio',
    value: 3
  },
  {
    name: 'hard',
    action: 'Difícil',
    value: 4
  }
]

export const items = [
  'foots',
  'hands',
  'right-foot',
  'left-foot',
  'right-hand',
  'left-hand'
]

export const getRandomElement = <Type,>(array: Type[]): Type => {
  return array[Math.floor(Math.random() * array.length)]
}