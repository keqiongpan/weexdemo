<template>
  <div class="switch-radio" @click="value = !value">
    <div class="track" :class="[value ? 'track-on' : 'track-off']"></div>
    <transition name="shrink">
      <div class="groove" v-if="!value"></div>
    </transition>
    <transition name="flip-on">
      <div class="thumb thumb-on" v-if="value"></div>
    </transition>
    <transition name="flip-off">
      <div class="thumb thumb-off" v-if="!value"></div>
    </transition>
  </div>
</template>

<script>
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
  .shrink-enter-active {
    transition: all 0.15s;
  }
  .shrink-enter {
    transform: scale(0);
  }
  .flip-on-enter-active {
    transition: all 0.15s;
  }
  .flip-on-enter {
    transform: translateX(-40px);
  }
  .flip-off-enter-active {
    transition: all 0.15s;
  }
  .flip-off-enter {
    transform: translateX(40px);
  }
</style>
