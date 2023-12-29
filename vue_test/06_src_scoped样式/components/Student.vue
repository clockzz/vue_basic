<template>
  <div class="test">
    <h2 class="qwe">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  

  export default {
    name: "Student",
    data(){
      return {
        name: "张三",
        sex: "男",
      }
    },
    
  }  
</script>

<!-- 不写lang就是默认是css  less相当于css最大的特点就是可以嵌套写-->
<style scoped lang="less">
  .test{
    /* width: 100px; */
    /* height: 100px; */
    background-color:orange; 
    .qwe{
      color: red;
    }
  }
</style>

