<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <Student></Student>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>

  //引入组件
  import School from './components/School.vue'
  import Student from './components/Student.vue'
  export default {
    name: 'App',
    data() {
      return { 
        msg: 'Welcome to Your Vue.js App'
       }
      },
      components: {
        School,
        Student
      }
  }
</script>

<style>

</style>