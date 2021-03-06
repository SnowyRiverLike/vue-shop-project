/*
* 包含n个接口请求函数的模块
* */

import ajax from './ajax'
// ## 1、根据经纬度获取位置详情        接口需要promise参数但ajax封装的是query参数（请求路径不对）
export const reqAddress = (geohash) => ajax ('/api/position/'+geohash)
//[http://localhost:3000/position/40.10038,116.36867](http://localhost:3000/position/40.10038,116.36867)

// ## 2、获取食品分类列表
export const reqcategorys = () => ajax('/api/index_category')


// ## 3、根据经纬度获取商铺列表
export const reqShop= (latitude,longitude) => ajax('/api/shops',{latitude,longitude})
//[http://localhost:3000/shops?latitude=40.10038&longitude=116.36867](http://localhost:3000/shops?latitude=40.10038&longitude=116.36867)

// export const reqShop = (latitude,longitude) => ajax('/shops',{latitude,longitude})
//      传这么传 latitude,longitude顺序要对，{latitude,longitude}属性名要传不管顺序如果传三个就用对象方式传

      // 4 账号登陆密码
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})

/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

/**
 * 获取用户信息(根据会话)
 */
export const reqUser = () => ajax('/api/userinfo')


export const reqLogout = () => ajax('/api/logout')

