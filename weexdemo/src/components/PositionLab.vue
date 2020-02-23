<template>
  <div class="position-lab" @click="onClick">
    <div class="original-css" :class="[process ? 'use-css' : '']"></div>
    <div class="original-transition" :class="[process ? 'use-transition' : '']"></div>
    <div ref="entity" class="original-animation"></div>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
export default {
  data: function () {
    return {
      process: false
    }
  },
  methods: {
    onClick: function () {
      let vm = this
      let process = !vm.process

      console.log(`process => ${process}`)

      vm.process = process

      animation.transition(vm.$refs.entity, {
        styles: {transform: `translateX(${process ? 50 : 0}px)`},
        duration: 3000,
        timingFunction: 'ease'
      })
    }
  }
}
</script>

<style scoped>
  .position-lab {
    border-width: 1px;
    width: 100px;
    height: 58px;
  }
  .original-css {
    position: absolute;
    background-color: red;
    width: 1px;
    height: 16px;
    left: 0px;
    top: 0px;
  }
  .use-css {
    transform: translateX(50px);
  }
  .original-transition {
    position: absolute;
    background-color: red;
    width: 1px;
    height: 16px;
    left: 0px;
    top: 20px;
  }
  .use-transition {
    transform: translateX(50px);
    transition-property: transform;
    transition-duration: 3s;
  }
  .original-animation {
    position: absolute;
    background-color: red;
    width: 1px;
    height: 16px;
    left: 0px;
    top: 40px;
  }
</style>
