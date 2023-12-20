<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
  // import { mixinName, mixinSecond } from "../mixin";
  export default {
    name: "School",
    data() {
      return {
        name: "尚硅谷",
        address: "北京",
        x:666
      }
    },
    // mixins: [mixinName,mixinSecond],
   /*  mounted() {
      console.log('giao');
    }, */
  }
</script>

<style>

</style>