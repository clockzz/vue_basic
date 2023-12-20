<template>
  <div class="demo">
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  // import { mixinName,mixinSecond } from '../mixin';

  export default {
    name: "Student",
    data(){
      return {
        name: "张三",
        sex: "男",
      }
    },
    // mixins: [mixinName,mixinSecond]
  }  
</script>

