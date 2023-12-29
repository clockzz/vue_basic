# note
**vscode打开终端快捷键crtl+`**

## 脚手架文件结构:
    |--node modules
    |--public
    |  |-- favicon.ico:页签图标
    |  |-- index.html:首页入口文件
    |--src
    |  |-- assets:存放静态资源
    |  |    |--logo.png:项目logo
    |  |-- components:存放vue组件
    |  |    |-- HelloWorld.vue:项目首页
    |  |-- App.vue:项目入口组件
    |  |-- main.js:项目入口js
    |-- .gitignore:git上传需要忽略的文件格式
    |-- babel.config.js:babel配置文件
    |-- package-lock.json:npm自动生成，用于记录当前状态下实际安装的各个npm包的版本号
    |-- package.json:应用包配置文件
    |-- README.md:项目的说明文档，markdown语法
    |-- vue.config.js:vue-cli3.0配置文件

## 关于不同版本的Vue:
> 1. vue.js和vue.runtime.xxx.js的区别:
    (1). vue.js是完整版的Vue，包含:核心功能+模板解析器
    (2). vue.runtime.xxx.js是运行版的Vue，只包含: 核心功能;没有模板解析器
> 2. vue.runtime.xxx.js的作用:
      因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数

## vue.config.js配置文件
>  使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
>  使用vue.config.js可以对脚手架进行个性化定制，详情见: https://cli.vuejs.org/zh


## ref属性
> 作用:ref是vue中用于获取dom元素的一个属性，通过ref可以给dom元素或组件起一个索引名称，方便后续
> 1. 被用来给元素或了组件注册引用信息 (id的替代者)
> 2. 应用在htm1标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象 (vc)
> 3. 使用方式:
>   打标识: `<h1 ref="xxx">.....</h1><School ref="xxx"></Schoo1>`
>   获取: this.$refs.xxx
>
## 配置项props
    功能:让组件接收外部传过来的数据
    (1).传递数据:
        <Demo name="xxx"/>
    (2).接收数据:
        第一种方式(只接收) :
        props : [ 'name' ]

        第二种方式(限制类型) :
            props:{
                name:String
            }

        第三种方式(限制类型、限制必要性、指定默认值) :
            props:{
                name:{
                    type:String,//类型
                    required:true,//必要性
                    default:'老王'//默认值
                }
            }
        备注: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
                
## mixin(混入)


    功能:可以把多个组件中的公共配置提取出来，然后进行统一配置
    使用方式：
        第一步定义混合，例如：
        {
            data(){....},
            methods:{....},
            mounted(){....}
        }
        第二步使用混入，例如：
            (1). 全局混入
                Vue.mixin(xxx)
            (2). 局部混入
                mixins:[xxx]

## 插件
    功能:用于增强Vue
    本质:就是一个包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件:
        对象.install = function (Vue, options) {
            // 1. 添加全局过滤器
            Vue.filter(....)

            // 2. 添加全局指令
            Vue.directive(....)

            // 3. 配置全局混入(合)
            Vue.mixin(....)

            // 4. 添加实例方法
            Vue.prototype.$myMethod = function () {...}
            Vue.prototype.$myProperty = xxxx
        }
    使用插件:
        Vue.use(插件, 配置对象)
 
## scoped样式
    作用: 让样式在局部生效，防止冲突
    写法: 
        <style scoped>

        </style>
