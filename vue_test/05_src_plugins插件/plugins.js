export default{ 
  install(Vue){
    // 定义全局过滤器
    Vue.filter('mySlice',function(val){
      return val.slice(0,4)
  })
    // 定义一个全局指令
    Vue.directive('fbind',{
      bind(el,binding){
                  el.value=binding.value;
                  console.log('bind');
                  //console.log('fbind-big',this);
                },
                //指令所在元素被插入页面时
                inserted(el,binding){
                  el.value=binding.value;
                  el.focus();
                  console.log('fbind');
                  //console.log('fbind-bind',this);
                },
              //指令所在的模板被重新解析时
                update(el,binding) {
                  el.value=binding.value;
                  console.log('updated');
                  //console.log('fbind-update',this);
                  //el.focus();
                }
    })
    //定义混入
    Vue.mixin({
      data() {
        return {
          x:1,
          y:2
        }
      },
    })
    //给Vue原型上添加一个方法(vm和vc都能使用)
    Vue.prototype.hello=()=>{alert('hello')}
    
  }
}

/* const plugin= {
  install(Vue){
    console.log('@@@install',Vue);
  }
}

export default plugin; */