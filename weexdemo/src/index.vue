<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
    <div class="clickme" @click="onClick"><text>Click Me</text></div>
    <MessageBox ref="msgbox" />
    <div style="flex-direction: row; align-items: center;">
      <SwitchRadio :on.sync="radio"/>
      <text style="font-size: 32px; width: 64px; margin: 16px;">{{ radio ? "ON" : "OFF" }}</text>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import MessageBox from '@/components/MessageBox'
import SwitchRadio from '@/components/SwitchRadio'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MessageBox,
    SwitchRadio
  },
  data: () => ({
    logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
    radio: false
  }),
  methods: {
    onClick () {
      this.$refs.msgbox.show('Weex自定义弹出框组件演示！！', '信息')
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .clickme {
    font-size: 64px;
    margin: 48px;
    padding: 24px;
    background-color: #0088ff;
    border-radius: 10px;
  }
</style>
