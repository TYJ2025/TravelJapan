import { restaurant } from './restaurant.js'
import { izakaya } from './izakaya.js'
import { sushi } from './sushi.js'
import { localfood } from './localfood.js'

// Ordered list of all practice scenarios, shown on the home screen.
export const scenarios = [restaurant, sushi, izakaya, localfood]

export function getScenario(id) {
  return scenarios.find((s) => s.id === id)
}
