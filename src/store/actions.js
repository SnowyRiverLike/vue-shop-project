/*
* 包含n个用来间接更新状态数据的方法的对象*/

// 发请求引入api的东西
import {
  reqAddress,
  reqcategorys,
  reqShop
} from '../api'

//引入mutation-types里的常量
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
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
  async getCategorys ({commit}) {
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
    const result = await reqShop(latitude , longitude)

    if (result.code === 0) {
      const shops = result.data
      //commit给mutation
      commit(RECEIVE_SHOPS, {shops})
    }
  },


}
