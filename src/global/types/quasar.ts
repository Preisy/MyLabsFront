export interface QScrollDetailsEvent {
  'position': {
    'top': number,
    'left': number
  },
  'direction': 'up' | 'down' | 'left' | 'right',
  'directionChanged': true,
  'delta': {
    'top': number,
    'left': number
  },
  'inflectionPoint': {
    'top': number,
    'left': number
  },
}
