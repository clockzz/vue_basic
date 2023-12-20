<template>
  <div>
    <!-- 组件的name属性是组件的标识，相当于组件的ID -->
    <Student name="lili" sex="female" :age="18"/>
    <hr>
    <Student name="joe" sex="male" :age="19"/>
    <hr>
    <Student name="Tom" sex="male"/>
    
    <!-- <hr>
    <Student/>
    <hr>
    <Student/> -->
  </div>
</template>
 
<script>
  import Student from './components/Student';


  export default {
    name:'App',
     components:{Student},
  }
</script>

<style>

</style>