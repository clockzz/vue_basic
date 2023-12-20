<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: "School",
    data(){
      return {
        name: "北京语言大学",
        address: "北京市海淀区西二旗"
      }
    }
  }
</script>

<style>
.demo{
  background-color: skyblue;
  
  margin-top: 30px;
  border-radius: 5px;
  /* 给元素添加阴影 */
  box-shadow: 10px 10px 10px 10px skyblue;
  /* 给元素添加边框 */
  border: 1px solid skyblue;
  /* 给元素添加内边距 */
  padding: 10px;
  /* 给元素添加外边距 */
  margin: 10px;

}
</style>