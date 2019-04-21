<template>
  <div class="switch-radio" @click="onClick">
    <div ref="track" class="track" :class="[value ? 'track-on' : 'track-off']"></div>
    <div ref="groove" class="groove" :class="[value ? 'groove-on' : 'groove-off']"></div>
    <div ref="thumb" class="thumb" :class="[value ? 'thumb-on' : 'thumb-off']"></div>
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
    animation: function (value, done) {
      let vm = this
      let animationCount = 0

      let animationDone = function () {
        if (--animationCount === 0) {
          done()
        }
      }

      let animationProcess = function () {
        animationCount++
        animation.transition(vm.$refs.track, {
          styles: { backgroundColor: `${value ? '#4cd864' : '#e5e5e5'}` },
          duration: 150
        }, animationDone)

        animationCount++
        animation.transition(vm.$refs.groove, {
          styles: { transform: `scale(${value ? 0 : 1})` },
          duration: 150
        }, animationDone)

        animationCount++
        animation.transition(vm.$refs.thumb, {
          styles: { transform: `translateX(${value ? 40 : 0}px)` },
          duration: 150
        }, animationDone)
      }

      setTimeout(animationProcess, 0)
    },
    onClick: function () {
      let vm = this
      let value = !vm.value
      vm.animation(value, function () { vm.value = value })
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
  .groove-on {
    transform: scale(0);
  }
  .groove-off {
    transform: scale(1);
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
  }
  .thumb-off {
    transform: translateX(0px);
  }
</style>
