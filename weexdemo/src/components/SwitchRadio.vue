<template>
  <div class="switch-radio" @click="value = !value">
    <div class="track" :class="value ? 'track-on' : 'track-off'"></div>
    <div class="thumb" :class="value ? 'thumb-on' : 'thumb-off'"></div>
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
    width: 49px;
    height: 27px;
  }
  .track {
    width: 49px;
    height: 27px;
    border-radius: 14px;
  }
  .track-on {
    background-color: green;
  }
  .track-off {
    background-color: gray;
  }
  .thumb {
    position: absolute;
    top: 0px;
    width: 27px;
    height: 27px;
    border-radius: 14px;
    background-color: white;
    box-shadow: 0px 0px 2px black;
  }
  .thumb-on {
    left: 22px;
  }
  .thumb-off {
    left: 0px;
  }
</style>
