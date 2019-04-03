<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
    <div class="clickme" @click="onClick"><text>Click Me</text></div>
    <MessageBox ref="msgbox" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import MessageBox from '@/components/MessageBox'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MessageBox
  },
  data: () => ({
    logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
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
