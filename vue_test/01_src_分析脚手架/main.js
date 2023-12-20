/* 该文件是整个项目的入口文件 */
//引入Vue
import Vue from 'vue'

//引入App组件，它是所有组件的父组件
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  el: '#app',
  // 完成这个功能：让APP组件放入容器
  render: h => h(App),


  // render(createElement){
     //createElement是createElement函数的引用
  //   return createElement('h1','hello')
  //}
  //render:q=>q('h1','hello')
  //template:`<h1>hello</h1>`，
  // components:{App},
})
// .$mount('#app')

/* 
关于不同版本的Vue:
    1.vue.js与vue.runtime.xxx.js的区别:
        (1).vue.js是完整版的Vue，包含: 核心功能+模板解析器。
        (2).vue.runtime.xxx.js是运行版的Vue，只包含: 核心功能:没有模板解析器
    2.因为vue.runtime.xxx.js没有校板解析器，所以不能使用template配置项，
      需要使用render函数接收到的createElement丽数去指定具体内容。
*/