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
const animation = weex.requireModule('animation')
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
      const env = weex.config.env
      const designPixelPerRem = env.rootValue
      const viewportPixelPerRem = env.rem
      return designPixel / designPixelPerRem * viewportPixelPerRem
    },
    transition: function () {
      let args = [...arguments]
      setTimeout(function () { animation.transition.apply(animation, args) }, 0)
    },
    shrinkEnter: function (el, done) {
      el.style.transform = 'scale(0)'
      this.transition(el, { styles: { transform: 'scale(1)' }, duration: 3000 }, done)
    },
    shrinkLeave: function (el, done) {
      el.style.transform = 'scale(1)'
      this.transition(el, { styles: { transform: 'scale(0)' }, duration: 3000 }, done)
    },
    flipOnEnter: function (el, done) {
      el.style.transform = `translateX(${this.viewportPixelFromDesignPixel(-40)}px)`
      this.transition(el, { styles: { transform: 'translateX(0)' }, duration: 3000 }, done)
    },
    flipOffEnter: function (el, done) {
      el.style.transform = `translateX(${this.viewportPixelFromDesignPixel(40)}px)`
      this.transition(el, { styles: { transform: 'translateX(0)' }, duration: 3000 }, done)
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
