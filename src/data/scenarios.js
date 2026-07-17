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
import { inflight } from './inflight.js'
import { transport } from './transport.js'
import { taxiDirections } from './taxiDirections.js'
import { shinkansen } from './shinkansen.js'
import { trainAnnouncements } from './trainAnnouncements.js'
import { hotelCheckin } from './hotelCheckin.js'
import { onsen } from './onsen.js'
import { convenience } from './convenience.js'
import { supermarket } from './supermarket.js'
import { departmentFoodHall } from './departmentFoodHall.js'
import { drugstore } from './drugstore.js'
import { bicCamera } from './bicCamera.js'
import { traditionalMarket } from './traditionalMarket.js'
import { pharmacy } from './pharmacy.js'
import { daily } from './daily.js'
import { colloquial } from './colloquial.js'
import { onomatopoeia } from './onomatopoeia.js'

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
  shinkansen,
  trainAnnouncements
]

export const airportScenarios = [
  airport,
  inflight
]

export const hotelScenarios = [
  hotelCheckin,
  onsen
]

export const shoppingScenarios = [
  convenience,
  supermarket,
  departmentFoodHall,
  drugstore,
  bicCamera,
  traditionalMarket
]

export const healthScenarios = [
  pharmacy
]

export const dailyScenarios = [
  daily
]

export const shortPhraseScenarios = [
  colloquial,
  onomatopoeia
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
    description: '計程車、車站、IC 卡、公車、問路、新幹線與電車廣播。',
    scenarios: transportScenarios
  },
  {
    id: 'airport',
    icon: '✈️',
    label: '機場 · Airport',
    title: '空港',
    description: '機艙服務、入境審查、行李提領與機場服務。',
    scenarios: airportScenarios
  },
  {
    id: 'hotel',
    icon: '🏨',
    label: '飯店 · Hotel',
    title: '泊まる',
    description: '入住、早餐、Wi-Fi、寄放行李、退房與日歸溫泉規則。',
    scenarios: hotelScenarios
  },
  {
    id: 'convenience',
    icon: '🛒',
    label: '購物 · Shopping',
    title: '買い物',
    description: '便利商店、超市、百貨美食街、藥妝店、Bic Camera 與傳統市場：找商品、相容性、免稅與付款。',
    scenarios: shoppingScenarios
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
    description: '日常與旅行的超短句、自然口語／丁寧說法，以及擬音語與擬態語。',
    scenarios: shortPhraseScenarios
  }
]

// Ordered list of all practice scenarios, used by hash routing.
export const scenarios = scenarioGroups.flatMap((group) => group.scenarios)

export function getScenario(id) {
  return scenarios.find((s) => s.id === id)
}
