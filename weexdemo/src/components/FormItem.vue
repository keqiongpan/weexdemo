<template>
  <div class="form-item">
    <text class="required-star" v-if="necessary">*</text>
    <div class="title-bar">
      <slot name="title-bar">
        <text class="title"><slot name="title">这里是标题</slot></text>
      </slot>
    </div>
    <div class="content-box">
      <slot>
        <text class="content">
          <slot name="content">这里是表单是盒子，可以使用插槽。</slot>
        </text>
      </slot>
    </div>
    <div class="separator" />
  </div>
</template>

<script>
export default {
  props: ['required'],
  data: function () {
    return {
      necessary: (this.required !== undefined)
    }
  },
  created: function () {
    console.log(this)
  }
}
</script>

<style scoped>
  .form-item {
    width: 750px;
  }
  .required-star {
    position: absolute;
    left: 4px;
    top: 21px;
    font-size: 28px;
    color: red;
  }
  .title-bar {
    margin: 16px;
    border-width: 1px;
    border-color: red;
  }
  .title {
    font-size: 24px;
    color: gray;
  }
  .content-box {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    border-width: 1px;
    border-color: red;
  }
  .content {
    font-size: 32px;
    color: green;
    text-align: center;
  }
  .separator {
    position: absolute;
    bottom: 0px;
    left: 16px;
    right: 16px;
    height: 1px;
    background-color: gray;
  }
</style>
