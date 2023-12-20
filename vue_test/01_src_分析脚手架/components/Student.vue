<template>
  <!-- 组件的结构 -->
  <div class="home">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我出现学生姓名</button>

  </div>
</template>

<script>
// 组件的动态交互

  export default {
    name:'Student',
    data() {
      return {
        name: 'Teddy',
        age: '18',
      }
    },
    methods: {
      showName() {
        alert(this.name)
      },
    },
  }

</script>
<!-- 
<style>
/* 组件的样式 */
.home {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  background-color: orange;
}
</style> -->