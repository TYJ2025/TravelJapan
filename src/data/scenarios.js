import { restaurant } from './restaurant.js'
import { izakaya } from './izakaya.js'
import { sushi } from './sushi.js'
import { yakitori } from './yakitori.js'
import { yakiniku } from './yakiniku.js'
import { shabushabu } from './shabushabu.js'
import { kappo } from './kappo.js'
import { kaiseki } from './kaiseki.js'
import { shokudo } from './shokudo.js'
import { bento } from './bento.js'
import { oden } from './oden.js'
import { okinawa } from './okinawa.js'
import { fishmarket } from './fishmarket.js'
import { localfood } from './localfood.js'
import { allergy } from './allergy.js'
import { dietary } from './dietary.js'
import { colloquial } from './colloquial.js'

// Ordered list of all practice scenarios, shown on the home screen.
export const scenarios = [
  restaurant,
  colloquial,
  sushi,
  izakaya,
  yakitori,
  yakiniku,
  shabushabu,
  kappo,
  kaiseki,
  shokudo,
  bento,
  oden,
  okinawa,
  fishmarket,
  localfood,
  allergy,
  dietary
]

export function getScenario(id) {
  return scenarios.find((s) => s.id === id)
}
