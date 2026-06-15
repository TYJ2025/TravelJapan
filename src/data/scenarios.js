import { restaurant } from './restaurant.js'
import { izakaya } from './izakaya.js'
import { sushi } from './sushi.js'
import { yakitori } from './yakitori.js'
import { yakiniku } from './yakiniku.js'
import { localfood } from './localfood.js'
import { allergy } from './allergy.js'
import { dietary } from './dietary.js'

// Ordered list of all practice scenarios, shown on the home screen.
export const scenarios = [restaurant, sushi, izakaya, yakitori, yakiniku, localfood, allergy, dietary]

export function getScenario(id) {
  return scenarios.find((s) => s.id === id)
}
