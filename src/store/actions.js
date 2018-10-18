/*
* 包含n个用来间接更新状态数据的方法的对象*/

// 发请求引入api的东西
import {
  reqAddress,
  reqcategorys,
  reqShop,
  reqUser,
  reqLogout,
} from '../api'

//引入mutation-types里的常量
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  /*INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,*/
} from './mutation-types'

//三个异步anction获取数据发请求
export default {
// 异步获取地址address
  async getAddress({commit, state}) {
    //发送ajax请求
    const {latitude, longitude} = state
    const result = await reqAddress(latitude + ',' + longitude)  //{code: 0 , data: address}
    if (result.code === 0) {
      const address = result.data
      //commit给mutation
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取地址categorys
  async getCategorys({commit}) {
    //发送ajax请求
    const result = await reqcategorys()
    if (result.code === 0) {
      const categorys = result.data
      //commit给mutation
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //异步获取地址shops
  async getShops({commit, state}) {
    //发送ajax请求
    const {latitude, longitude} = state
    const result = await reqShop(latitude, longitude)

    if (result.code === 0) {
      const shops = result.data
      //commit给mutation
      commit(RECEIVE_SHOPS, {shops})
    }
  },

//同步保存用户的信息action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

  //异步获取user信息action
  async getUser({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
        const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },

  //异步获取退出登陆action
  async logout ({commit}) {
 const result =await reqLogout()
    if (result.code===0) {
   const user =result.data
      commit(RESET_USER)
    }
},


  //跟新food数量
  /*  updateFoodCount({commit}, {isAdd, food}) {
      if (isAdd) { //数量增加

      } else {  //数量减少
        commit(DECREMENT_FOOD_COUNT, {food})

      }
    }*/


}
