<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <!-- JavaScript 中，使用 *1 可以将字符串转换为数字类型，然后再执行数学运算 -->
    <!-- <h2>学生年龄：{{age*1+1}}</h2> -->

    <button @click="add">点我年龄加1</button>
    <!-- <br>
    <button @click="giao">点我开始giaogiao</button> -->
  </div>
</template>

<script>
  export default {
    name: "Student",
    data(){
      return {
        msg:"你给我里giaogiao!!!",
        myAge:this.age
      }
    },
    // props:['name','age','sex'],//简单接收

    // 接收的同时对数据进行类型限制
   /*  props:{
      name:String,
      age:Number,
      sex:String
    }, */
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
      name:{
        type:String,//name的类型是字符串
        required:true,//必须传递
        // default:"匿名"
      },
      sex:{
        type:String,
        required:true,
      },
      age:{
        type:Number,
        default:18//默认值
      }
    },
    methods: {
      add(){
        this.myAge++
      },
      giao(){
        alert("giao!!!");
        let dom = document.querySelector("h1");
        dom.innerHTML = "giao!!!";
      }
    },
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