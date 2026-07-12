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
import { transport } from './transport.js'
import { taxiDirections } from './taxiDirections.js'
import { hotelCheckin } from './hotelCheckin.js'
import { convenience } from './convenience.js'

export const foodScenarios = [
  restaurant,
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

export const transportScenarios = [
  transport,
  taxiDirections
]

export const hotelScenarios = [
  hotelCheckin
]

export const convenienceScenarios = [
  convenience
]

export const scenarioGroups = [
  {
    id: 'food',
    icon: '🍱',
    label: '食物 · Food',
    title: '食べる',
    description: '餐廳、居酒屋、壽司、便當、過敏與飲食需求。',
    scenarios: foodScenarios
  },
  {
    id: 'transport',
    icon: '🚕',
    label: '交通 · Transport',
    title: '移動する',
    description: '計程車、車站、IC 卡、公車與問路。',
    scenarios: transportScenarios
  },
  {
    id: 'hotel',
    icon: '🏨',
    label: '飯店 · Hotel',
    title: '泊まる',
    description: '入住、早餐、Wi-Fi、寄放行李與退房時間。',
    scenarios: hotelScenarios
  },
  {
    id: 'convenience',
    icon: '🏪',
    label: '便利商店 · Store',
    title: 'コンビニ',
    description: '買餐點、加熱、袋子、付款與店內服務。',
    scenarios: convenienceScenarios
  }
]

// Ordered list of all practice scenarios, used by hash routing.
export const scenarios = scenarioGroups.flatMap((group) => group.scenarios)

export function getScenario(id) {
  return scenarios.find((s) => s.id === id)
}
