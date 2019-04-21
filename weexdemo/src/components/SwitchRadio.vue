<template>
  <div class="switch-radio" @click="value = !value">
    <div ref="track" class="track" :class="[value ? 'track-on' : 'track-off']"></div>
    <div ref="groove" class="groove" :class="[value ? 'groove-on' : 'groove-off']"></div>
    <div ref="thumb" class="thumb" :class="[value ? 'thumb-on' : 'thumb-off']"></div>
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
    transition-property: background-color;
    transition-duration: 0.15s;
  }
  .track-off {
    background-color: #e5e5e5;
    transition-property: background-color;
    transition-duration: 0.15s;
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
  .groove-on {
    transform: scale(0);
    transition-property: transform;
    transition-duration: 0.15s;
  }
  .groove-off {
    transform: scale(1);
    transition-property: transform;
    transition-duration: 0.15s;
  }
  .thumb {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 54px;
    height: 54px;
    border-radius: 27px;
    background-color: white;
    box-shadow: 0px 2px 5px #b0b0b0;
  }
  .thumb-on {
    transform: translateX(40px);
    transition-property: transform;
    transition-duration: 0.15s;
  }
  .thumb-off {
    transform: translateX(0px);
    transition-property: transform;
    transition-duration: 0.15s;
  }
</style>
