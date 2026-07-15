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
import { crab } from './crab.js'
import { seafood } from './seafood.js'
import { airport } from './airport.js'
import { transport } from './transport.js'
import { taxiDirections } from './taxiDirections.js'
import { shinkansen } from './shinkansen.js'
import { hotelCheckin } from './hotelCheckin.js'
import { convenience } from './convenience.js'
import { supermarket } from './supermarket.js'
import { pharmacy } from './pharmacy.js'
import { daily } from './daily.js'
import { colloquial } from './colloquial.js'

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
  dietary,
  crab,
  seafood
]

export const transportScenarios = [
  transport,
  taxiDirections,
  shinkansen
]

export const airportScenarios = [
  airport
]

export const hotelScenarios = [
  hotelCheckin
]

export const convenienceScenarios = [
  convenience,
  supermarket
]

export const healthScenarios = [
  pharmacy
]

export const dailyScenarios = [
  daily
]

export const shortPhraseScenarios = [
  colloquial
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
    description: '計程車、車站、IC 卡、公車、問路與新幹線。',
    scenarios: transportScenarios
  },
  {
    id: 'airport',
    icon: '✈️',
    label: '機場 · Airport',
    title: '空港',
    description: '入境審查、行李提領與機場服務。',
    scenarios: airportScenarios
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
    icon: '🛒',
    label: '購物 · Shopping',
    title: '買い物',
    description: '便利商店與超市：找商品、加熱、袋子與付款。',
    scenarios: convenienceScenarios
  },
  {
    id: 'health',
    icon: '💊',
    label: '健康 · Health',
    title: '薬局・病院',
    description: '藥局、常見症狀、藥物注意事項與就醫求助。',
    scenarios: healthScenarios
  },
  {
    id: 'daily',
    icon: '💬',
    label: '日常 · Everyday',
    title: '日常会話',
    description: '自我介紹、來自台灣、台灣美食與推薦景點。',
    scenarios: dailyScenarios
  },
  {
    id: 'short-phrases',
    icon: '💬',
    label: '生活短句 · Phrases',
    title: '毎日のひとこと',
    description: '日常與旅行的超短句，並對照自然口語與丁寧說法。',
    scenarios: shortPhraseScenarios
  }
]

// Ordered list of all practice scenarios, used by hash routing.
export const scenarios = scenarioGroups.flatMap((group) => group.scenarios)

export function getScenario(id) {
  return scenarios.find((s) => s.id === id)
}
