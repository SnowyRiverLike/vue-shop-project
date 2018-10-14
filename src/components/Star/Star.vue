<template>
  <div class="star " :class="`star-${size}`">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>
<script>

  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

  export default {

    props: {
      /*下一步写标签传属性，先设计传什么属性，后立马写标签，这样就能很有可能看到部分效果*/

      score: Number,  //评分
      size: Number     //尺寸
    },

    computed: {

      /*
      * 3.5:3+1+1*/
      starClasses() {
        const scArr = []

        const {score} = this                        //先把评分取出来根据评分分星星的类（on half off）先定义常量然后使用
        const scoreInteger = Math.floor(score)

        // 向scArr中添加n个CLASS_ON
        for (let i = 0; i < scoreInteger; i++) {
          scArr.push(CLASS_ON)
        }

        //向scArr中添加一个或者0个CLASS_HALF
        if (score * 10 - scoreInteger * 10 >= 5) {          //乘10 防止它变成 0.499所以让0.5变成整数5
          scArr.push(CLASS_HALF)
        }
        // 向scArr中添加n个CLASS_OFF
        while (scArr.length < 5) {
          scArr.push(CLASS_OFF)
        }

        return scArr
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
