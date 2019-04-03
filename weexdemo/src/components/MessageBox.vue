<template>
  <div class="container" v-if="visible">
    <div class="messagebox">
        <div class="titlebar">
          <text class="title">{{title}}</text>
          <div class="closebutton" @click="diss">
              <text class="close">⊗</text>
          </div>
        </div>
        <div class="contentview">
          <text class="message">{{message}}</text>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'message'],
  data: () => ({
    visible: false
  }),
  methods: {
    show (message, title = '提示') {
      this.visible = true
      this.title = title
      this.message = message
    },
    diss () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.container {
  position: fixed;
  justify-content: center;
  align-items: center;
  /* 兼容iOS/Android平台 */
  width: 750px;
  /* 兼容Web平台 */
  z-index: 99999;
}

.messagebox {
  width: 558px;
  /* 兼容iOS/Android平台 */
  margin-top: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
}

.titlebar {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: dodgerblue;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.title {
  flex: 1;
  color: white;
  padding: 16px;
}

.closebutton {
  padding: 16px;
}

.close {
  color: white;
}

.message {
  text-align: center;
  padding: 16px;
}
</style>
