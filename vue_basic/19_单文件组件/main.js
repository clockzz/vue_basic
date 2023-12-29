// 浏览器不支持es6、.vue文件，需要把他们放到脚手架里面运行
import App from "./App.vue";

  new Vue({
      el:'#root',
      template: '<App/>',
      components:{App}
     })