<template>
  <div>
    <!-- 组件的name属性是组件的标识，相当于组件的ID -->
    <School/>
    <hr>
    <Student/>
   
  </div>
</template>
 
<script>
  import Student from './components/Student';
  import School from './components/School';


  export default {
    name:'App',
     components:{Student,School},
  }
</script>

<style>

</style>