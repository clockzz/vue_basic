<template>
  <div>
    <h1 v-text="msg"></h1>
    <button @click="showDOM" ref="btn">点我更新上方的DOM元素</button>
    <hr>
    <h1 v-text="giao" ref="title"></h1>
    <button @click="showTime">点击我显示现在的时间</button>
    <School ref="sch" />
    <hr>
    <School/>
    <hr>
    <School/>
  </div>
</template>

<script>
  //引入School组件 
  import School from './components/School.vue'

  export default {
    name:'App',
    data() {
      return {
        msg:'Welcome to Your Vue.js App',
        giao:'Hello,Vue.js'
      }
    },
    components:{School},
    methods: {
      showDOM(){
        //获取DOM元素
        let dom = document.querySelector('h1');
        //修改DOM元素的内容
        dom.innerText = '欢迎来到Vue.js的世界';

        //输出button的内容
        console.log(this.$refs.btn.innerText);
        
      },
      showTime(){
        //获取DOM元素
        let dom = this.$refs.title;
        //修改DOM元素的内容
        dom.innerText = '当前时间：'+new Date();

        console.log(this.$refs.title);//真实DOM元素
        console.log(this.$refs.btn);//真实DOM元素
        console.log(this.$refs.sch);//School组件的实例对象（vc）
      },
  }}
</script>

<style>

</style>