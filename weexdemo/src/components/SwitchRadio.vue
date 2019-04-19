<template>
  <div class="switch-radio" @click="value = !value">
    <div class="track" :class="[value ? 'track-on' : 'track-off']"></div>
    <transition @enter="shrinkEnter" @leave="shrinkLeave" :css="false">
      <div class="groove" v-if="!value"></div>
    </transition>
    <transition @enter="flipOnEnter" :css="false">
      <div class="thumb thumb-on" v-if="value"></div>
    </transition>
    <transition @enter="flipOffEnter" :css="false">
      <div class="thumb thumb-off" v-if="!value"></div>
    </transition>
  </div>
</template>

<script>
import Weex from 'weex-vue-render'
import Velocity from 'velocity-animate'
export default {
  props: ['on'],
  data: function () {
    return {
      value: !!this.on
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      this.$emit('update:on', newValue)
    }
  },
  methods: {
    viewportPixelFromDesignPixel: function (designPixel) {
      // const designPixelPerRem = 750.0 / 10.0
      // const viewportWidth = this.$el.ownerDocument.documentElement.clientWidth
      // const viewportPixelPerRem = viewportWidth / 10.0
      const env = Weex.config.env
      const designPixelPerRem = env.rootValue
      const viewportPixelPerRem = env.rem
      return designPixel / designPixelPerRem * viewportPixelPerRem
    },
    shrinkEnter: function (el, done) {
      Velocity(el, { scale: [1, 0] }, { duration: 'fast', complete: done })
    },
    shrinkLeave: function (el, done) {
      Velocity(el, { scale: [0, 1] }, { duration: 'fast', complete: done })
    },
    flipOnEnter: function (el, done) {
      Velocity(el, { translateX: [0, this.viewportPixelFromDesignPixel(-40)] }, { duration: 'fast', complete: done })
    },
    flipOffEnter: function (el, done) {
      Velocity(el, { translateX: [0, this.viewportPixelFromDesignPixel(40)] }, { duration: 'fast', complete: done })
    }
  }
}
</script>

<style scoped>
  .switch-radio {
    width: 102px;
    height: 62px;
  }
  .track {
    width: 102px;
    height: 62px;
    border-radius: 31px;
  }
  .track-on {
    background-color: #4cd864;
  }
  .track-off {
    background-color: #e5e5e5;
  }
  .groove {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 94px;
    height: 54px;
    border-radius: 27px;
    background-color: white;
  }
  .thumb {
    position: absolute;
    top: 4px;
    width: 54px;
    height: 54px;
    border-radius: 27px;
    background-color: white;
    box-shadow: 0px 2px 5px #b0b0b0;
  }
  .thumb-on {
    left: 44px;
  }
  .thumb-off {
    left: 4px;
  }
</style>
