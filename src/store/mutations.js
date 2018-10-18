/*
* 包含n个用来直接更新状态数据的方法的对象*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RESET_USER,
 /* INCREMENT_FOOD_COUNT,
 */ DECREMENT_FOOD_COUNT,
  RECEIVE_USER
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER](state, {user}) {
    state.user = user
  },
  [RESET_USER](state) {
    state.user = {}
  },

  /*[INCREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count++
    } else {//第一次增加，没有count属性
      // 给food添加一个新的属性count, 值为1
      // food.count = 1   // 界面不会更新, 因为新添加的属性, 没有数据绑定
      Vue.set(food, 'count', 1) // 新添加的属性有数据绑定 ==>界面会更新
    }

  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count--
    }
  },
*/
}
