<template>
  <!-- 组件的结构 -->
  <div class="home">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>

  </div>
</template>

<script>
// 组件的动态交互

  export default {
    name:'School',
    data() {
      return {
        name: '北京邮电大学',
        address: '北京',
      }
    },
    methods: {
      showName() {
        alert(this.name)
      },
    },
  }

</script>

<style>
/* 组件的样式 */
.home {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  background-color: orange;
}
</style>