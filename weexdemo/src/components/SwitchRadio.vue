<template>
  <div class="switch-radio" @click="value = !value">
    <div class="track" :class="[value ? 'track-on' : 'track-off']"></div>
    <div class="groove" v-if="!value"></div>
    <div class="thumb" :class="[value ? 'thumb-on' : 'thumb-off']"></div>
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
</style>
